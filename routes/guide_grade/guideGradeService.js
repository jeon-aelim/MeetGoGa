const sequelize = require('../../models').sequelize;
const {
    GuideGrade
} = require('../../models');
sequelize.query("SET NAMES utf8mb4");

module.exports = {

    makeGrade: (body) => {
        return new Promise((resolve) => {
            GuideGrade.create({
                guide_grade_score: body.guide_grade_score,
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


    reqGrade: (gradeID) => {
        return new Promise((resolve) => {
            GuideGrade.findAll({
                where: {
                    guide_grade_id: gradeID
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