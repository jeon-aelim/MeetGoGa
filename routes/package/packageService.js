const sequelize = require('../../models').sequelize;
const {
    Package
} = require('../../models');
sequelize.query("SET NAMES utf8");

module.exports = {

    reqPackage: (packageID) => {
        return new Promise((resolve) => {
            Package.findOne({
                where: {
                    package_id: packageID
                },
                raw: true
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
    },

    reqPackageList: (category, offset) => {
        return new Promise((resolve) => {
            Package.findAll({
                where: {
                    package_category: category
                },
                attributes: { exclude: ["package_content", "package_location"] },

                offset: offset,
                limit: 5,

                //   {
                //     model: Comment,
                //     attributes: [
                //       [sequelize.fn('COUNT', 'comment_id'), 'commentCount'],
                //     ]
                //   }
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
    },

    reqGuidePackageList: (guideID, offset) => {
        return new Promise((resolve) => {
            Package.findAll({
                where: {
                    guide_id: guideID
                },
                attributes: { exclude: ["package_content", "package_location"] },
                offset: offset,
                limit: 5,

                //   {
                //     model: Comment,
                //     attributes: [
                //       [sequelize.fn('COUNT', 'comment_id'), 'commentCount'],
                //     ]
                //   }
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