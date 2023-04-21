const express = require('express');
const router = express.Router();
const userController = require('./userController');
// const authUtil = require('../../middlewares/auth').verifyToken;

//로그인
router.post('/login', userController.login);  

//회원가입
router.post('/signUp', userController.signUp);  


module.exports = router;
