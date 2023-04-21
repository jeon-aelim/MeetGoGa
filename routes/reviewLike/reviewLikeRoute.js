const express = require('express');
const router = express.Router();
const reviewLikeController = require('./reviewLikeController');
//const authUtil = require('../../middlewares/auth').verifyToken;

router.post('/reviewLike',/*, authUtil*/ reviewLikeController.reviewLike);

module.exports = router;