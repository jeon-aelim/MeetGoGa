const sequelize = require('../../models').sequelize;
const {
    ReviewLike
} = require('../../models');
sequelize.query("SET NAMES utf8");

module.exports = {
    reviewLike: (guideID, userID) => {
        return new Promise((resolve) => {
            ReviewLike.findOrCreate({
                where:
                {
                    guide_id: guideID,
                    user_id: userID
                },
                defaults: {
                    guide_id: guideID,
                    user_id: userID
                }
            })
                .then((result) => {
                    console.log(result);
                    result !== null ? resolve(result) : resolve(false);
                })
        })
            .catch((err) => {
                resolve(false);
                throw err
            })
    },

    reviewUnlike: (guideID, userID) => {
        return new Promise((resolve) => {
            ReviewLike.destroy({
                where: {
                    guide_id: guideID,
                    user_id: userID
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
    }
}
