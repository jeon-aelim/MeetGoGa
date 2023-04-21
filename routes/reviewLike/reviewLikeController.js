const reviewLikeService = require('./reviewLikeService');

module.exports = {

    reviewLike: (req, res) => {
        const guideID = req.body.guide_id;
        const userID = req.body.user_id;

        reviewLikeService.reviewLike(guideID, userID)
            .then(result => {
                let obj = {};
                if (result[1] == true) {
                    obj['suc'] = true;
                    obj['reviewLike'] = result[0];
                    res.send(obj);
                } else if (result[1] == false) {
                    reviewLikeService.reviewUnlike(guideID, userID)
                    .then(result => {
                        let obj = {};
                        if(result) {
                            obj['reviewUnlike'] = result;
                            obj['suc'] = true;
                            res.send(obj);
                            console.log("reviewUnlike is succeed");
                        }else{
                            obj['suc'] = false;
                            obj['err'] ="reviewUnlike is failed";
                            res.send(obj);
                        }
                    })
                } else {
                    obj['suc'] = false;
                    obj['err'] = "reviewLike err";
                }
            })
    }

}