const guideMarkService = require('./guideMarkService');

module.exports = {

    guideMark: (req, res) => {
        const guideID = req.body.guide_id;
        const userID = req.body.user_id;

        guideMarkService.guideMark(guideID, userID)
            .then(result => {
                let obj = {};
                if (result[1] == true) {
                    obj['suc'] = true;
                    obj['guideMark'] = result[0];
                    res.send(obj);
                } else if (result[1] == false) {
                    obj['suc'] = true;
                    obj['guideMark'] = result[0];
                    res.send(obj);
                } else {
                    obj['suc'] = false;
                    obj['err'] = "guideMark is failed";
                    res.send(obj);
                }
            })
    }

}