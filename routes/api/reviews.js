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
      .then(user => {
        if (!user) {
          return res.status(400).json({ author: "The author does exist" });
        } else {
          let newReview = new Review({
            gameId: req.body.gameId,
            author: req.body.author,
            body: req.body.body
          })
          newReview.save()
          res.send(newReview)
        }
      })
    .catch(errs => res.status(400).json(errs))
}); 

module.exports = router;