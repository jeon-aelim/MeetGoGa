const express = require('express');
const router = express.Router();
const guideController = require('./guideController');
const authUtil = require('../../middlewares/auth.js').verifyToken;

//로그인
router.post('/login', guideController.login);  

//회원가입
router.post('/signUp', guideController.signUp);  

//패키지 제작 
router.post('/makePackage',/* authUtil,*/ guideController.makePackage);  

//패키지 수정 
router.post('/remakePackage',/* authUtil, */guideController.remakePackage);


module.exports = router;
