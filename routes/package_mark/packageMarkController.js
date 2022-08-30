const packageMarkService = require('./packageMarkService');

module.exports = {

    packageMark: (req, res) => {
        const packageID = req.body.package_id;
        const userID = req.body.user_id;

        packageMarkService.packageMark(packageID, userID)
            .then(result => {
                let obj = {};
                if (result[1] == true) {
                    obj['suc'] = true;
                    obj['packageMark'] = result[0];
                    res.send(obj);
                } else if (result[1] == false) {
                    obj['suc'] = true;
                    obj['packageMark'] = result[0];
                    res.send(obj);
                } else {
                    obj['suc'] = false;
                    obj['err'] = "packageMark is failed";
                    res.send(obj);
                }
            })
    }

}