const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get('/', (req, res) => {
  res.json({ 
    "Action-Adventure": ['3030-54229', '3030-10983', '3030-27312', '3030-16094', '3030-59194' ], // action
    "Strategy": ['3030-53696', '3030-19887', '3030-13062', '3030-19864', '3030-10485'], //strategy
    "Sports": ['3030-6287', '3030-83332', '3030-6839', '3030-29376', '3030-20452', '3030-2101', '3030-32594','3030-36048'], //sports
    "Role-Playing": ['3030-1520', '3030-33394', '3030-13053', '3030-59924', '3030-11552'], //role-playing game
    "Racing": ['3030-10173', '3030-48568', '3030-42929', '3030-71298', '3030-44517'], // drive/racing
    "Fighting": ['3030-74573', '3030-48320', '3030-18753', '3030-30944', '3030-3744'], //fighting 
    "Arcade": ['3030-1896', '3030-7624', '3030-311', '3030-9112', '3030-8208'], //arcade
    "Shooter": ['3030-73517', '3030-20654', '3030-36113', '3030-35533', '3030-26782'], // shooter
    "Music": ['3030-20673', '3030-80351', '3030-9860', '3030-18360', '3030-65652'], //music/rhythm
    "Party": ['3030-17743', '3030-35578', '3030-53284', '3030-70938', '3030-83921'], // partygame
    "Simulation": ['3030-2473', '3030-82440', '3030-70241', '3030-50899', '3030-73765'], // simulation
    "Puzzle": ['3030-15822', '3030-19409', '3030-21662', '3030-42779', '3030-83716'] // puzzle   
  });
})


router.get('/:id', (req, resp) => {
  axios.get(`https://www.giantbomb.com/api/game/${req.params.id}/?api_key=F2d36b2884be5ee29bed8ac6e1d919b67b30b5d3&format=json`)
    .then((res) => {
        console.log('RESSSS', res.data.results.name);
        const game = {
          id: res.data.results.guid,
          deck: res.data.results.deck,
          name: res.data.results.name,
          image: res.data.results.image.original_url,
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

module.exports = router;