const express = require('express');
const { body } = require("express-validator");

const feedController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// POST /feed/post
router.post(
    '/item',
    isAuth,
    feedController.createItem
  );

  
module.exports = router;