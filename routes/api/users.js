const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login')
const passport = require('passport');
const validateUserPatchInput = require('../../validation/update_user')


router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({msg: 'Success'});
})

router.get("/:id", (req, res) => {
  const user = User.findById(req.params.id)
    .then(user => {
      if (user) {
        let payload = {
          id: user.id,
          profileImgUrl: user.profileImgUrl,
          name: user.name,
          email: user.email,
          bio: user.bio,
          backLogGames: user.backLogGames,
          playedGames: user.playedGames,
          recommendedList: user.recommendedList
        }
        res.send(payload)
      }
    })
    .catch(errs => res.status(400).json(errs))
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({email: req.body.email})
  .then(user => {
    if (user) {
      return res.status(400).json({email: "A user has already been registered with that email."});
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                bio: user.bio,
                profileImgUrl: user.profileImgUrl
              };
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            })
            .catch(err => console.log(err))
        });
      });
    }
  })
})

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if(!user) {
        return res.status(404).json({ email: "This user doesn't exist" });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => { 
          if(isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              email: user.email,
              bio: user.bio,
              profileImgUrl: user.profileImgUrl
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            res.status(400).json({ password: "Incorrect Password!" });
          }
        })
    })
})

router.patch('/:id', 
  passport.authenticate("jwt", { session: false }), 
  async (req, res) => {
    const { isValid, errors } = validateUserPatchInput(req.body);
    // const userParams = res.body; 
    if (!isValid) {
      return res.status(400).json(errors);
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err;
        const updatedUser = User.findByIdAndUpdate(req.params.id, {$set: {
          name: req.body.name,
          email: req.body.email,
          bio: req.body.bio,
          profileImgUrl: req.body.profileImgUrl,
          password: hash
        }}, (err, docs) => {
          if (err) {
            console.log(err)
          }
          
          let payload = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            bio: req.body.bio,
            profileImgUrl: req.body.profileImgUrl,
            backLogGames: docs.backLogGames,
            playedGames: docs.playedGames
          }
          
          res.send(payload)
        });
      })
    })
  })
  

router.patch("/:id/backLogGames/", 
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    User.findByIdAndUpdate(
      req.params.id,
      { $addToSet: {
        "backLogGames": { 
          id: req.body.gameId,
          image: req.body.image,
          name: req.body.name
        }
        // "recommendedList": { $each: req.body.similar_games }
        }
      },
        { new: true }
    )
    .then (user => {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        profileImgUrl: user.profileImgUrl,
        backLogGames: user.backLogGames,
        playedGames: user.playedGames
        // recommendedList: user.recommendedList
      }
      res.send(payload);
    })
      .catch(errs => res.status(400).json(errs))
    /* 
        res.body.gamer_id -- adds to the backlog or played 
        res.body.similar_games -- iterate through this --- add if its not in all the lists 
    */
  }
)

router.patch("/:id/playedGames/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("before", req.body)
    User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          "playedGames": {
            id: req.body.gameId,
            image: req.body.image,
            name: req.body.name
          }
          // "recommendedList": { $each: req.body.similar_games }
        }
      },
      { new: true }
    )
    .then(user => {
      console.log("after", user)
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        profileImgUrl: user.profileImgUrl,
        backLogGames: user.backLogGames,
        playedGames: user.playedGames
        // recommendedList: user.recommendedList
      }
      res.send(payload);
    })
    .catch(errs => res.status(400).json(errs))
  }
)


router.patch("/:id/backLogGames/delete", // delete route
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // console.log("before Update", req.body)
    User.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          "backLogGames": {id: req.body.gameId}
        }
      },
      { new: true }
    )
    .then(user => {
      console.log("after update", user)
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        profileImgUrl: user.profileImgUrl,
        backLogGames: user.backLogGames,
        playedGames: user.playedGames,
        // recommendedList: user.recommendedList     
      }
      res.send(payload);
    })
    .catch(errs => res.status(400).json(errs))
  }
)

router.patch("/:id/playedGames/delete", // delete route
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    User.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          "playedGames": { id: req.body.gameId }
        }
      },
      { new: true }
    )
    .then(user => {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        profileImgUrl: user.profileImgUrl,
        backLogGames: user.backLogGames,
        playedGames: user.playedGames,
        // recommendedList: user.recommendedList
      }
      res.send(payload);
    })
    .catch(errs => res.status(400).json(errs))
  }
)

// router.delete("/:id/recommendedGames/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     User.findByIdAndUpdate(
//       req.params.id,
//       { $addToSet: {
//         "recommendedList": { $each: req.body.similar_games }
//         }
//       }
//     )
//     .then(user => {
//       const payload = {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         bio: user.bio,
//         profileImgUrl: user.profileImgUrl,
//         backLogGames: user.backLogGames,
//         playedGames: user.playedGames,
//         recommendedList: user.recommendedList
//       }
//       res.send(payload);
//     })
//     .catch(errs => res.status(400).json(errs))
//   }
// )

module.exports = router;