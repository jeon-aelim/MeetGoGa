const sequelize = require('../../models').sequelize;
const {
    Member
} = require('../../models');
sequelize.query("SET NAMES utf8");

module.exports = {
    memeber: (packageID, userID) => {
        return new Promise((resolve) => {
            Member.create({
                package_id: packageID,
                user_id: userID
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
