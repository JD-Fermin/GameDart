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

router.get("/test", (req, res) => {
  res.json({ msg: "this is the users route" })
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
          if (err){
            console.log(err)
          }
          
          let payload =  {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            bio: req.body.bio,
            profileImgUrl: req.body.profileImgUrl
          }
          res.send(payload)
        });
      })
    })
    // bcrypt.genSalt(10, (err, salt) => {
    //   bcrypt.hash(req.body.password, salt, (err, hash) => {
    //     if (err) throw err;
    //     const updatedUser = User.findByIdAndUpdate(req.params.id)
    //     updatedUser.name = req.body.name;
    //     updatedUser.email = req.body.email;
    //     updatedUser.bio = req.body.bio;
    //     updatedUser.profileImgUrl = req.body.profileImgUrl;
    //     updatedUser.password = hash;
    //     let payload =  {
    //       name: updatedUser.name,
    //       email: updatedUser.email,
    //       bio: updatedUser.bio,
    //       profileImgUrl: updatedUser.profileImgUrl
    //     }
    //     res.send(payload)
    //   })
    // })
  //   const user = await User.findById(req.params.id);
  
  //   user.name = req.body.name;
  //   user.email = req.body.email;
  //   user.bio = req.body.bio;
  //   user.profileImgUrl = req.body.profileImgUrl;
  
  
  //   bcrypt.genSalt(10, (err, salt) => {
  //     bcrypt.hash(user.password, salt, (err, hash) => {
  //       if (err) throw err;
  //       user.password = hash;
  //       user.save()
  //         .then(user => {
  //           const payload = {
  //             id: user.id,
  //             name: user.name,
  //             email: user.email,
  //             bio: user.bio,
  //             profileImgUrl: user.profileImgUrl
  //           };
  //           res.send(user);
  //         })
  //         .catch(err => console.log(err))
  //       })
  //     });
  
  
  //   // await user.save()
  })

      // await user.save()
      // res.send(user);



module.exports = router;