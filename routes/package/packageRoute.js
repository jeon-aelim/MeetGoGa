const express = require('express');
const router = express.Router();
const packageController = require('./packageController');
// const authUtil = require('../../middlewares/auth').verifyToken;

// 패키지 조회
router.get('/reqPackage/:package_id', packageController.reqPackage);  

// 패키지 리스트 조회
router.get('/reqPackageList/:package_category/:page', packageController.reqPackageList);  

//가이드의 패키지 리스트
router.get('/reqGuidePackageList/:guide_id/:page', packageController.reqGuidePackageList);



module.exports = router;
