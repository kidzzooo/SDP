
const express = require("express")
const router = express.Router()
router.post("/register",require("./controllers/userController").insertUser)
router.post("/checkLogin",require("./controllers/userController").checkUser)
router.post("/order",require("./controllers/userController").order)
module.exports = {router}
