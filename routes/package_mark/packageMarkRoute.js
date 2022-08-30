const express = require('express');
const router = express.Router();
const packageMarkController = require('./packageMarkController');
//const authUtil = require('../../middlewares/auth').verifyToken;

router.post('/packageMark',/*, authUtil*/ packageMarkController.packageMark);

module.exports = router;