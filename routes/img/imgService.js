const sequelize = require('../../models').sequelize;
const {
    Img
} = require('../../models');
sequelize.query("SET NAMES utf8");


module.exports = {
    img: (body, imageUrl) => {
        return new Promise((resolve) => {
            Img.create({
                img_url: imageUrl,
                package_id: body.package_id,
                guide_review_id: body.guide_review_id,
                package_review_id: body.package_review_id
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
    }
}