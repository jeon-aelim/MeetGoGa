const express = require('express');
const router = express.Router();
const guideGradeController = require('./guideGradeController');
// const authUtil = require('../../middlewares/auth').verifyToken;

// 가이드 평점 쓰기
router.post('/makeGrade', guideGradeController.makeGrade);  

// 가이드 평점 조회
router.get('/reqGrade/:guide_grade_id', guideGradeController.reqGrade);  


module.exports = router;
