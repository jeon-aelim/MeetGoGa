module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "guide_grades",
        {

            guide_grade_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },

            guide_grade_score: {
                type: DataTypes.INTEGER,
                unique: true
            },

        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}