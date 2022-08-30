const express = require('express');
const router = express.Router();
const reviewCommentController = require('./reviewCommentController');
// const authUtil = require('../../middlewares/auth').verifyToken;

//댓글 쓰기
router.post('/makeComment'/*, authUtil*/, reviewCommentController.makeComment);
//댓글 삭제
router.get('/deleteComment'/*, authUtil*/, reviewCommentController.deleteComment);
//댓글 수정
router.post('/remakeComment'/*, authUtil*/, reviewCommentController.remakeComment);

module.exports = router;
