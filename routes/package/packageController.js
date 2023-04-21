const packageService = require('./packageService');

module.exports = {

    reqPackage: (req, res) => {
        const packageID = req.params.package_id;

        packageService.reqPackage(packageID)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['reqPackage'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log("reqPackage is succeed");
                } else {
                    obj['suc'] = false;
                    obj['err'] ="reqPackage is failed";
                    res.send(obj);
                }
            })
    },

    reqPackageList: (req, res) => {
        const category = req.params.package_category;
        const page = req.params.page;
        let offset = 0;

        if (page > 0) {
            offset = 5 * (page - 1);
        }

        packageService.reqPackageList(category, offset)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['reqPackageList'] = result;
                    obj['suc'] = true;
                    // res.send(obj);
                    res.send(result);
                    console.log("reqPackage list is succeed");
                } else {
                    obj['suc'] = false;
                    obj['err'] ="reqPackage list is failed";
                    res.send(obj);
                }
            })
    },

    reqGuidePackageList: (req, res) => {
        const guideID = req.params.guide_id;
        const page = req.params.page;
        let offset = 0;

        if (page > 0) {
            offset = 5 * (page - 1);
        }

        packageService.reqGuidePackageList(guideID, offset)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['reqGuidePackageList'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log("reqGuidePackageList is succeed");
                } else {
                    obj['suc'] = false;
                    obj['err'] ="reqGuidePackageList is failed";
                    res.send(obj);
                }
            })
    },
}