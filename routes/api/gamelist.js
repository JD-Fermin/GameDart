const express = require("express");
const router = express.Router();
const User = require('../../models/User');


// router.patch('/:id',
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const { isValid, errors } = validateUserPatchInput(req.body);
//     // const userParams = res.body; 
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const user = await User.findById(req.params.id);

//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.bio = req.body.bio;
//     user.profileImgUrl = req.body.profileImgUrl;

//     await user.save()
//     res.send(user);
//   })

  router.post("/users")