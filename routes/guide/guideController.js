const guideService =  require('./guideService');
const path = require('path');

const hashing = require(path.join(__dirname, '../../config', 'hashing.js'));
const salt = require(path.join(__dirname, '../../config', 'config.json'));
const jwt = require('../../config/jwt');


module.exports = {

    login: (req, res) => {
        const body = req.body;
        const hash = hashing.enc(body.guide_password, salt);
        const token = jwt.sign(body);
        guideService.login(body, hash)
            .then(result => {
                let obj = {};
                if (result) {
                    console.log("where token");
                    console.log(token);
                    obj['token'] = token;
                    obj['login'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log("guide`s login is succeed");

                } else {
                    obj['suc'] = false;
                    obj['err'] = "guide`s login is failed";
                    res.send(obj);
                }
            })
    },

    signUp: (req, res) => {
        const body = req.body;
        const hash = hashing.enc(body.guide_password, salt);

        guideService.signUp(body, hash)
        .then(result => {
            let obj = {};
            if(result) {
                obj['suc'] = true;
                res.send(obj);
                console.log("guide`s signUp is succeed");
            }else{
                obj['suc'] = false;
                obj['err'] = "guide`s signUp is failed";
                res.send(obj);
            }
        })
    },

    makePackage: (req, res) => {
        const body = req.body;
        const imgData = req.files;

        guideService.makePackage(body, imgData)
        .then(result => {
            let obj = {};
            if(result) {
                obj['suc'] = true;
                obj['img']= imgData.path;
                obj['test']= imgData;
                res.send(obj);
                console.log("makePackage is succeed");
            }else{
                obj['suc'] = false;
                obj['err'] = "makePackage is failed";
                res.send(obj);
            }
        })
    },

    remakePackage: (req, res) => {
        const body = req.body;

        guideService.remakePackage(body)
        .then(result => {
            let obj = {};
            if(result) {
                obj['suc'] = true;
                res.send(obj);
                console.log("remakePackage is succeed");
            }else{
                obj['suc'] = false;
                obj['err'] = "remakePackage is failed";
                res.send(obj);
            }
        })
    },


}