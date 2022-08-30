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
            charset: "utf8mb4",
            collate: "utf8mb4_0900_ai_ci",
            timestamps: false,
        }
    )
}