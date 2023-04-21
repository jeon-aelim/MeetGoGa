const express = require('express');
const router = express.Router();

const guideRoute = require('./guide/guideRoute');
const guideGradeRoute = require('./guide_grade/guideGradeRoute');
const guideMarkRoute = require('./guide_mark/guideMarkRoute');
const guideReviewRoute = require('./guide_review/guideReviewRoute');
const imgRoute = require('./img/imgRoute');
const memberRoute = require('./member/memberRoute');
const packageRoute = require('./package/packageRoute');
const packageGradeRoute = require('./package_grade/packageGradeRoute');
const packageMarkRoute = require('./package_mark/packageMarkRoute');
const packageReviewRoute = require('./package_review/packageReviewRoute');
const reviewCommentRoute = require('./reviewComment/reviewCommentRoute');
const reviewLikeRoute = require('./reviewLike/reviewLikeRoute');

router.use('/guide', guideRoute);
router.use('/guideGrade', guideGradeRoute);
router.use('/guideMark', guideMarkRoute);
router.use('/guideReview', guideReviewRoute);
router.use('/img', imgRoute);
router.use('/member', memberRoute);
router.use('/package', packageRoute);
router.use('/packageGrade', packageGradeRoute);
router.use('/packageMark', packageMarkRoute);
router.use('/packageReview', packageReviewRoute);
router.use('/reviewComment', reviewCommentRoute);
router.use('/reviewLike', reviewLikeRoute);

module.exports = router;