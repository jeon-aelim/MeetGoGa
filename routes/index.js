const express = require('express');
const router = express.Router();

const guideRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide/guideRoute');
const guideGradeRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_grade/guideGradeRoute');
const guideMarkRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_mark/guideMarkRoute');
const guideReviewRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_review/guideReviewRoute');
const imgRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/img/imgRoute');
const memberRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/member/memberRoute');
const packageRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package/packageRoute');
const packageGradeRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_grade/packageGradeRoute');
const packageMarkRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_mark/packageMarkRoute');
const packageReviewRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_review/packageReviewRoute');
const reviewCommentRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/reviewComment/reviewCommentRoute');
const reviewLikeRoute = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/reviewLike/reviewLikeRoute');

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