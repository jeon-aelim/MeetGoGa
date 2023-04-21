const sequelize = require('../../models').sequelize;
const {
    PackageMark
} = require('../../models');
sequelize.query("SET NAMES utf8");

module.exports = {
    PackageMark: (packageID, userID) => {
        return new Promise((resolve) => {
            PackageMark.findOrCreate({
                where:
                {
                    package_id: packageID,
                    user_id: userID
                },
                defaults: {
                    package_id: packageID,
                    user_id: userID
                }
            })
            .then((result => {
                if (result[1]) { // create
                    resolve(result);
                } else if (!result[1]) { // find
                    PackageMark.destroy({
                        where: {
                            package_id: packageID,
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
