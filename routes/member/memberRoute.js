const express = require('express');
const router = express.Router();
const memberController = require('./memberController');
// const authUtil = require('../../middlewares/auth').verifyToken;

//멤버 추가
router.post('/member', memberController.member);  

module.exports = router;