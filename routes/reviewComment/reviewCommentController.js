const reviewCommentService = require('./reviewCommentService');

module.exports = {
    makeComment: (req, res) => {
        const body = req.body;
        let parents;

        if(body.review_comment_parents){
            parents = body.review_comment_parents;
        }else{
            parents = -1;
        }

        console.log(parents);
        reviewCommentService.makeComment(body, parents)
            .then(result => {
                
                let obj = {};
                if (result) {
                    obj['suc'] = true;
                    obj['comment'] = result;
                    res.send(obj);
                } else {
                    obj['suc'] = false;
                    obj['err'] = "makeComment is failed";
                    res.send(obj);
                }
            })
    },

    deleteComment: (req, res) => {
        const body = req.body;
        reviewCommentService.deleteComment(body)
            .then(result => {
                let obj = {};
                
                if (result) {
                    obj['suc'] = true;
                    res.send(obj);
                } else {
                    obj['suc'] = false;
                    obj['err'] = "deleteComment is failed";
                    res.send(obj);
                }
            })
    },

    remakeComment: (req, res) => {
        const body = req.body;
        reviewCommentService.remakeComment(body)
            .then(result => {
                
                console.log(result);
                let obj = {};
                if (result) {
                    obj['suc'] = true;
                    res.send(obj);
                } else {
                    obj['suc'] = false;
                    obj['err'] = "remakeComment is failed";
                    res.send(obj);
                }
            })
    }

}