const packageReviewService = require('./packageReviewService');

module.exports = {

    makeReview: (req, res) => {
        const body = req.body;

        packageReviewService.makeReview(body)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['makeReview'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log('makeReview is succeed');
                } else {
                    obj['suc'] = false;
                    obj['err'] ='makeReview is failed';
                    res.send(obj);
                }
            })
    },

    remakeReview: (req, res) => {
        const body = req.body;

        packageReviewService.remakeReview(body)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['suc'] = true;
                    res.send(obj);
                    console.log('remakeReview is succeed');
                } else {
                    obj['suc'] = false;
                    obj['err'] ='remakeReview is failed';
                    res.send(obj);
                }
            })
    },

    reqReview: (req, res) => {
        const reviewID = req.params.package_review_id;

        packageReviewService.reqReview(reviewID)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['reqReview'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log('reqReview is succeed');
                } else {
                    obj['suc'] = false;
                    obj['err'] ='reqReview is failed';
                    res.send(obj);
                }
            })
    },

    reqPackageReviewList: (req, res) => {
        const packageId = req.params.package_id;
        const page = req.params.page;
        let offset = 0;

        if (page > 0) {
            offset = 5 * (page - 1);
        }

        packageReviewService.reqPackageReviewList(packageId, offset)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['reqPackageReviewList'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log("reqPackageReviewList is succeed");
                } else {
                    obj['suc'] = false;
                    obj['err'] ="reqPackageReviewList is failed";
                    res.send(obj);
                }
            })

    }
}