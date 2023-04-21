const express = require('express');
const router = express.Router();
const packageGradeController = require('./packageReviewController');
// const authUtil = require('../../middlewares/auth').verifyToken;

// 가이드 리뷰 쓰기
router.post('/makeReview', /*authUtill,*/packageGradeController.makeReview);  

// 가이드 리뷰 수정
router.post('/remakeReview', /*authUtill,*/packageGradeController.remakeReview);  

// 가이드 리뷰 조회
router.get('/reqReview/:package_review_id', packageGradeController.reqReview);  

// 가이드 리뷰 목록 조회
router.get('/reqPackageReviewList/:package_id/:page', packageGradeController.reqPackageReviewList);  


module.exports = router;
