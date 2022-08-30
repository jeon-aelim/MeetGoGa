const sequelize = require('../../models').sequelize;
const {
    GuideMark
} = require('../../models');
sequelize.query("SET NAMES utf8mb4");

module.exports = {
    guideMark: (guideID, userID) => {
        return new Promise((resolve) => {
            GuideMark.findOrCreate({
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
            .then((result => {
                if (result[1]) { // create
                    resolve(result);
                } else if (!result[1]) { // find
                    GuideMark.destroy({
                        where: {
                            guide_id: guideID,
                            user_id: userID
                        }
                    })
                        .then((result) => {
                            console.log(result)
                            result !== null ? resolve(result) : resolve(false);
                        })
                        .catch((err) => {
                            resolve(false);
                            throw err;
                        });
                } else {
                    resolve(false);
                }
            }))
        })
            .catch((err) => {
                resolve(false);
                throw err
            })
    }
}
