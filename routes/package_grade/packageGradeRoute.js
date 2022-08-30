const express = require('express');
const router = express.Router();
const packageGradeController = require('./packageGradeController');
// const authUtil = require('../../middlewares/auth').verifyToken;

// 가이드 평점 쓰기
router.post('/makeGrade', packageGradeController.makeGrade);  

// 가이드 평점 조회
router.get('/reqGrade/:package_grade_id', packageGradeController.reqGrade);  


module.exports = router;
