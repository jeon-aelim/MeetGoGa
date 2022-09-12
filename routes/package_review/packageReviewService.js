const sequelize = require("../../models").sequelize;
const moment = require("moment");
const {
    PackageReview
} = require("../../models");
sequelize.query("SET NAMES utf8");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {

    makeReview: (body) => {
        return new Promise((resolve) => {
            PackageReview.create({
                package_review_title: body.package_review_title,
                package_review_content: body.package_review_content,
                package_review_date: moment().format("YYYY-MM-DD hh:mm:ss"),
                package_review_state: "생성",
                package_id: body.package_id,
                user_id: body.user_id
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

    remakeReview: (body) => {
        return new Promise((resolve) => {
            PackageReview.update({
                package_review_title: body.package_review_title,
                package_review_content: body.package_review_content,
                package_review_date: moment().format("YYYY-MM-DD hh:mm:ss"),
                package_review_state: "수정",
            },
            {
                where: {
                    package_review_id: body.package_review_id,
                    user_id: body.user_id
                }
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

    reqReview: (reviewID) => {
        return new Promise((resolve) => {
            PackageReview.findOne({
                where: { package_review_id: reviewID }
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

    reqPackageReviewList: (packageID, offset) => {
        return new Promise((resolve) => {
            PackageReview.findAll({
                where: {
                    package_id: packageID
                },
                attributes: { exclude: ["package_review_content"] },

                offset: offset,
                limit: 5
            })
                .then((result) => {
                    console.log(result);
                    result !== null ? resolve(result) : resolve(false)
                })
                .catch((err) => {
                    resolve(false);
                    throw err;
                })

        })
    }
}