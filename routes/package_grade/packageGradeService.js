const sequelize = require('../../models').sequelize;
const {
    PackageGrade
} = require('../../models');
sequelize.query("SET NAMES utf8");

module.exports = {

    makeGrade: (body) => {
        return new Promise((resolve) => {
            PackageGrade.create({
                package_grade_score: body.package_grade_score,
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


    reqGrade: (packageID) => {
        return new Promise((resolve) => {
            PackageGrade.findAll({
                where: {
                    package_grade_id: packageID
                }
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