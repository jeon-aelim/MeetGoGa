const guideReviewService = require('./guideReviewService');

module.exports = {

    makeReview: (req, res) => {
        const body = req.body;

        guideReviewService.makeReview(body)
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

        guideReviewService.remakeReview(body)
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
        const reviewID = req.params.guide_review_id;

        guideReviewService.reqReview(reviewID)
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

    reqGuideReviewList: (req, res) => {
        const guideId = req.params.guide_id;
        const page = req.params.page;
        let offset = 0;

        if (page > 0) {
            offset = 5 * (page - 1);
        }

        guideReviewService.reqGuideReviewList(guideId, offset)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['reqGuideReviewList'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log("reqGuideReviewList is succeed");
                } else {
                    obj['suc'] = false;
                    obj['err'] ="reqGuideReviewList is failed";
                    res.send(obj);
                }
            })

    }
}