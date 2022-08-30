const memberService = require('./memberService');

module.exports = {

    member: (req, res) => {
        const packageID = req.params.package_id;
        const userID = req.params.user_id;

        memberService.member(packageID, userID)
            .then(result => {
                let obj = {};
                if (result) {
                    obj['member'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log("member is succeed");
                } else {
                    obj['suc'] = false;
                    obj['err'] ="member is failed";
                    res.send(obj);
                }
            })

    }
}