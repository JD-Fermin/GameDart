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
                rating: req.body.rating
              });
              newReview.save()
              .then ((cur) => {
               res.send(cur)
              })
              .catch(err => res.status(400).json({ uniqueError: "User already made review of this game" }))
            // }) 
        }
      })
    .catch(errs => res.status(400).json(errs))
}); 

module.exports = router;