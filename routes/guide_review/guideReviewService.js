const sequelize = require("../../models").sequelize;
const moment = require("moment");
const {
    GuideReview
} = require("../../models");
sequelize.query("SET NAMES utf8");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {

    makeReview: (body) => {
        return new Promise((resolve) => {
            GuideReview.create({
                guide_review_title: body.guide_review_title,
                guide_review_content: body.guide_review_content,
                guide_review_date: moment().format("YYYY-MM-DD hh:mm:ss"),
                guide_review_state: "생성",
                guide_id: body.guide_id,
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
            GuideReview.update({
                guide_review_title: body.guide_review_title,
                guide_review_content: body.guide_review_content,
                guide_review_date: moment().format("YYYY-MM-DD hh:mm:ss"),
                guide_review_state: "수정",
            },
            {
                where: {
                    guide_review_id: body.guide_review_id,
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
            GuideReview.findOne({
                where: { guide_review_id: reviewID }
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

    reqGuideReviewList: (guideID, offset) => {
        return new Promise((resolve) => {
            GuideReview.findAll({
                where: {
                    guide_id: guideID
                },
                attributes: { exclude: ["guide_review_content"] },

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