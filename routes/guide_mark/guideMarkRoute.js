const express = require('express');
const router = express.Router();
const guideMarkController = require('./guideMarkController');
//const authUtil = require('../../middlewares/auth').verifyToken;

router.post('/guideMark',/*, authUtil*/ guideMarkController.guideMark);

module.exports = router;