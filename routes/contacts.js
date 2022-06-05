const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/contacts", usersController.getContacts);

module.exports = router;
