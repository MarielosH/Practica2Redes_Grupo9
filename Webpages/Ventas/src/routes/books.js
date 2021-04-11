const express = require("express")
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.list)

router.get("/books", bookController.book)

router.post("/books", bookController.bookadd)



module.exports = router;