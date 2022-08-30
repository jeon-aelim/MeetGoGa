module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "package_grades",
        {

            package_grade_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },

            package_grade_score: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

        },
        
        {
            charset: "utf8mb4",
            collate: "utf8mb4_0900_ai_ci",
            timestamps: false,
        }
    )
}