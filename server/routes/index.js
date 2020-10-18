const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()

const emailModel = require("../models/emailModel")
const registerModel = require("../models/registerModel")

router.use(bodyParser.urlencoded({extended: true}))

router.post("/email", (req, res) => {
      const email = req.body.email
      
      const newEmail = new emailModel({
            email: email
      })

      newEmail.save()
      .then(res.redirect("/"))
      .catch(err => (console.error(err), res.end()))
})

router.post("/register", (req, res) => {
      const username = req.body.username
      const email = req.body.email

      const newRegister = new registerModel({
            name: username,
            email: email
      })

      newRegister.save()
      .then(res.redirect("/"))
      .catch(err => (console.error(err), res.end()))
})

module.exports = router