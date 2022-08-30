const userService =  require('./userService');
const path= require('path');

const hashing = require(path.join(__dirname, '../../config', 'hashing.js'));
const salt = require(path.join(__dirname, '../../config', 'config.json'));

module.exports = {

    login: (req, res) => {
        const body = req.body;
        const hash = hashing.enc(body.user_password, salt);

        userService.login(body, hash)
            .then(result => {
                let obj = {};
                if (result) {
                   // obj['token'] = jwt.sign(result);
                    obj['login'] = result;
                    obj['suc'] = true;
                    res.send(obj);
                    console.log("user`s login is succeed");

                } else {
                    obj['suc'] = false;
                    obj['err'] ="user`s login is failed";
                    res.send(obj);
                }
            })
    },

    signUp: (req, res) => {
        const body = req.body;
        const hash = hashing.enc(body.user_password, salt);

        userService.signUp(body, hash)
        .then(result => {
            let obj = {};
            if(result) {
                obj['signUp'] = result;
                obj['suc'] = true;
                res.send(obj);
                console.log("user`s signUp is succeed");
            }else{
                obj['suc'] = false;
                obj['err'] ="user`s signUp is failed";
                res.send(obj);
            }
        })
    }
}