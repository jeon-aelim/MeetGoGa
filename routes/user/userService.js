const sequelize = require('../../models').sequelize;
const {
    User,
    Package
} = require('../../models');
sequelize.query("SET NAMES utf8");

module.exports = {
    login: (body, hash) => {
        return new Promise((resolve) => {
            User.findOne({
                where: {
                    user_id: body.user_id,
                    user_password: hash
                },
                raw: true
            })
                .then((result) => {
                    console.log(result);
                    result !== null ? resolve(result) : resolve(false);
                })
                .catch((err) => {
                    resolve(false);
                    throw err;
                });
        })
    },

    signUp: (body, hash) => {
        return new Promise((resolve) => {
            User.findOrCreate({
                where: {
                    user_id: body.user_id
                },
                default: {
                    user_id: body.user_id,
                    user_password: hash,
                    user_name: body.user_name,
                    user_email: body.user_email,
                    user_gender: body.user_gender,
                    user_phone_number: body.user_phone_number,
                    user_nickname: body.user_nickname,
                    user_cert: body.user_cert,
                    user_img: body.user_img
                },
                raw: true
            })
                .then((result) => {
                    console.log(result[0].user_id, result[0].user_password);
                    
                    if (result[1]) { // create-true, find-false
                      resolve(result);
                    } else {
                      resolve(false);
                    }
          
                    console.log(result);
                })
                .catch((err) => {
                    resolve(false);
                    throw err;
                })
        })
    }
}