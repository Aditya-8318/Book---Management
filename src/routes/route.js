const express = require("express")
const router = express.Router()
const bookController = require("../controllers/bookController")
const userController = require("../controllers/userController")




router.post("/books", bookController.createBook)














module.exports = router;