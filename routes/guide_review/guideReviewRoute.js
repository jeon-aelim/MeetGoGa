const express = require('express');
const router = express.Router();
const guideGradeController = require('./guideReviewController');
// const authUtil = require('../../middlewares/auth').verifyToken;

// 가이드 리뷰 쓰기
router.post('/makeReview', /*authUtill,*/guideGradeController.makeReview);  

// 가이드 리뷰 수정
router.post('/remakeReview', /*authUtill,*/guideGradeController.remakeReview);  

// 가이드 리뷰 조회
router.get('/reqReview/:guide_review_id', guideGradeController.reqReview);  

// 가이드 리뷰 목록 조회
router.get('/reqGuideReviewList/:guide_id/:page', guideGradeController.reqGuideReviewList);  


module.exports = router;
