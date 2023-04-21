const sequelize = require("../../models").sequelize;
const moment = require("moment");
const {
    ReviewComment
} = require("../../models");
sequelize.query("SET NAMES utf8");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

module.exports = {
    makeComment: (body, parents) => {
        return new Promise((resolve) => {
            ReviewComment.create({
                review_comment_content: body.review_comment_content,
                review_comment_date: moment().format("YYYY-MM-DD hh:mm:ss"),
                review_comment_parents: parents,
                review_comment_state: "생성",
                user_id: body.user_id,
                guide_review_id: body.guide_review_id,
                package_review_id: body.package_review_id,
            }
            ).then((result) => {
                result !== null ? resolve(result) : resolve(false);
            });
        });
    },


    remakeComment: (body) => {
        return new Promise((resolve) => {
            ReviewComment.update({
                review_comment_content: body.review_comment_content,
                review_comment_date: moment().format("YYYY-MM-DD hh:mm:ss"),
                review_comment_state: "수정",
            },
                {
                    where: {
                        review_comment_id: body.review_comment_id,
                        user_id: body.user_id
                    }
                })
                .then((result) => {
                    result !== null ? resolve(result) : resolve(false);
                })
                .catch((err) => {
                    resolve(false);
                    throw err;
                });
        });
    },


    deleteComment: (body) => {
        return new Promise((resolve) => {
            ReviewComment.destroy({
                where: {
                    review_comment_id: body.review_comment_id,
                },
            })
                .then((result) => {
                    result !== null ? resolve(result) : resolve(false);
                })
                .catch((err) => {
                    resolve(false);
                    throw err;
                });
        });
    }
};
