const express = require("express");
const router = require("express").Router();
const axios = require("axios").default;
const { User } = require("../db.js");
const { conn } = require("../db.js");
const { Op } = require("sequelize");


router.get("/", (req, res) => {
  res.send("<h1>Welcome to Elastacloud</h1>");
});

router.get("/users", async (req, res) => {
  try {
     const user1 = await User.findAll();
      if (user1) {
        return res.json(user1);
      }
  } catch (err) {
    return res.status(400).send("<h1>User not found</h1>");
  }
});


router.post('/updateUser', async (req, res) => {
    let {email, loggedTime } = req.body;
    let userLoggedTime = await User.findOne({ where: { loggedTime: { [Op.like]: `%${loggedTime}`}}});
    if (userLoggedTime){
      try {
        let time = userLoggedTime.loggedTime + loggedTime;
        const result = await User.update(
          { loggedTime: time },
          { where: { email } }
        )
        res.json(result)
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const user1 = await User.findOrCreate({ 
          where: {email: 'email@email.com', password: 'password', loggedTime: loggedTime}
        });
        //  res.json(user1.toJSON());
          console.log(user1.stringify())
      } catch(err) {
        console.log(err)
      }
    }
});

module.exports = router;
