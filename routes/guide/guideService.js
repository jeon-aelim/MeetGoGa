const sequelize = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/models').sequelize;
const {
    Guide,
    Package
} = require('home/hosting_users/bcd1031/apps/bcd1031_meetgoga/models');
sequelize.query("SET NAMES utf8mb4");

module.exports = {
    login: (body, hash) => {
        return new Promise((resolve) => {
            Guide.findOne({
                where: {
                    guide_id: body.guide_id,
                    guide_password: hash
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
            Guide.findOrCreate({
                where: {
                    guide_id: body.guide_id
                },
                defaults: {
                    guide_id: body.guide_id,
                    guide_password: hash,
                    guide_name: body.guide_name,
                    guide_email: body.guide_email,
                    guide_gender: body.guide_gender,
                    guide_phone_number: body.guide_phone_number,
                    guide_nickname: body.guide_nickname,
                    guide_cert: body.guide_cert,
                    guide_img: body.guide_img
                },
                raw: true
            })
                .then((result) => {
                    console.log(result[0].guide_id, result[0].guide_password);
                    if (result[1]) { // create-true
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
    },

    makePackage: (body) => {
        return new Promise((resolve) => {
            Package.create({
                package_title: body.package_title,
                package_content: body.package_content,
                package_category: body.package_category,
                package_location: body.package_location,
                package_start_date: body.package_start_date,
                package_finish_date: body.package_finish_date,
                package_price: body.package_price,
                package_kakao_url: body.package_kakao_url,
                guide_id: body.guide_id,
                guide_name: body.guide_name
            })
                .then((result) => {
                    console.log(result);
                    result !== null ? resolve(result) : resolve(false)

                    console.log(result);
                    result !== null ? resolve(result) : resolve(false)
                })
                .catch((err) => {
                    resolve(false);
                    throw err;
                })
        })
    },

    remakePackage: (body) => {
        return new Promise((resolve) => {
            Package.update({
                package_title: body.package_title,
                package_content: body.package_content,
                package_category: body.package_category,
                package_location: body.package_location,
                package_start_date: body.package_start_date,
                package_finish_date: body.package_finish_date,
                package_price: body.package_price,
                package_kakao_url: body.package_kakao_url
            }, {
                where: {
                    package_id: body.package_id
                }
            }
            )
                .then((result) => {
                    console.log(body);
                    result !== null ? resolve(result) : resolve(false)
                })
                .catch((err) => {
                    resolve(false);
                    throw err;
                })
        })
    },

}