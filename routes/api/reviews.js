const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');
const Review = require('../../models/Review');
const validateReviewInput = require("../../validation/body");
const User = require("../../models/User");

router.post('/', 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);
    if(!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({_id: req.body.author})
      .then( async (user) => {
        if (!user) {
          return res.status(400).json({ author: "The author does not exist" });
        } else {
          //  Review.init()
          //   .then( async ()=> {
              let newReview = new Review({
                gameId: req.body.gameId,
                author: req.body.author,
                body: req.body.body,
                rating: parseInt(req.body.rating)
              });
              newReview.save()
              .then ((cur) => {
                console.log(cur)
               res.send(cur)
              })
              .catch(err => res.status(400).json({ uniqueError: "User already made review of this game" }))
            // }) 
        }
      })
    .catch(errs => res.status(400).json(errs))
}); 

router.patch('/:id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);
    if(!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({_id: req.body.author})
      .then( async (user) => {
        if (!user) {
          return res.status(400).json({ author: "The author does not exist" });
        } else {

              let updatedReview = Review.findByIdAndUpdate(req.params.id, {$set:{
                body: req.body.body,
                rating: parseInt(req.body.rating)
              }}, (err, docs) => {
                if (err) {
                  console.log(err)
                }

                res.send({
                  gameId: req.body.gameId,
                  author: req.body.author,
                  body: req.body.body,
                  rating: parseInt(req.body.rating)
                })
              })
        }
      })
    .catch(errs => res.status(400).json(errs))

  }
)

router.delete("/:id", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const payload = Review.findOneAndDelete({ _id: req.params.id })
      .then(result => {
        if (result) {
          res.send(result)
        } else {
          res.status(400).json({review: "Review does not exist"})
        }
      })
      .catch(err => res.status(400).json({review: "Review does not exist"}))
      
  }
)

module.exports = router;