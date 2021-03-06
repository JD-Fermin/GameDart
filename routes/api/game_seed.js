const express = require("express");
const router = express.Router();
const axios = require("axios");
const Review = require('../../models/Review');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateReviewInput = require('../../validation/body');
const passport = require('passport');





router.get('/', (req, res) => {
  res.json({ 
    "Action-Adventure": ['3030-54229', '3030-41355', '3030-27312', '3030-4966', '3030-22928', '3030-59194', '3030-2931', '3030-29443', '3030-68910', '3030-1563'], // action
    "Strategy": ['3030-53696', '3030-19887', '3030-13062', '3030-19864', '3030-10485', '3030-43583', '3030-42033', '3030-50618', '3030-37152', '3030-18540'], //strategy
    "Sports": ['3030-6287', '3030-83332', '3030-6839', '3030-29376', '3030-36048', '3030-20452', '3030-2101', '3030-32594', '3030-19716', '3030-31640'], //sports
    "Role-Playing": ['3030-1520', '3030-33394', '3030-13053', '3030-59924', '3030-3264', '3030-11552', '3030-267', '3030-18741', '3030-19783', '3030-10473'], //role-playing game
    "Racing": ['3030-34407', '3030-48568', '3030-42929', '3030-357', '3030-44517', '3030-10173', '3030-10087', '3030-71298', '3030-22135', '3030-46078'], // drive/racing
    "Fighting": ['3030-74573', '3030-48320', '3030-18753', '3030-30944', '3030-3744', '3030-6588', '3030-21699', '3030-20903', '3030-11822', '3030-5206'], //fighting 
    "Arcade": ['3030-1896', '3030-7624', '3030-311', '3030-9112', '3030-5099', '3030-8208', '3030-24704', '3030-29491', '3030-15784', '3030-977'], //arcade
    "Shooter": ['3030-20654', '3030-66622', '3030-9993', '3030-36113', '3030-26782', '3030-1578', '3030-15473', '3030-37030', '3030-48190', '3030-17280'], // shooter
    "Music": ['3030-20673', '3030-31705', '3030-9860', '3030-18360', '3030-23882', '3030-9436', '3030-2520', '3030-65652', '3030-31724', '3030-2873'], //music/rhythm
    "Party": ['3030-17743', '3030-53284', '3030-3410', '3030-45425', '3030-70938', '3030-20733', '3030-47445', '3030-42848', '3030-50561', '3030-54286'], // partygame
    "Simulation": ['3030-32356', '3030-2473', '3030-12893', '3030-50018', '3030-60005', '3030-38144', '3030-32923', '3030-57157', '3030-10998', '3030-58780'], // simulation
    "Puzzle": ['3030-20716',  '3030-19409', '3030-21662', '3030-47342', '3030-32367', '3030-42779', '3030-36268', '3030-27668', '3030-46572', '3030-53648'] // puzzle   
  });
})


router.get('/:id', (req, resp) => {
  axios.get(`https://www.giantbomb.com/api/game/${req.params.id}/?api_key=F2d36b2884be5ee29bed8ac6e1d919b67b30b5d3&format=json`)
    .then((res) => {
        const game = {
          id: res.data.results.guid,
          deck: res.data.results.deck,
          name: res.data.results.name,
          image: res.data.results.image.original_url,
          publishers: res.data.results.publishers,
          gameplay: res.data.results.images,
          genres: res.data.results.genres,
          similar_games: res.data.results.similar_games,
          platforms: res.data.results.platforms,
          original_release_date: res.data.results.original_release_date,
          linkToSite: res.data.results.site_detail_url
        }
      resp.json(game)
    })
});

router.get("/:id/reviews", async (req, res) => {
  const reviews = await Review.find({ gameId: req.params.id})
  .then(reviews => {
    if (reviews) {
      let payload = {}
      reviews.forEach((review) => {
        payload[review.id] = review
      })
      res.send(payload)
    }
  })
  .catch(errs => res.status(400).json(errs))
})


module.exports = router;