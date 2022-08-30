module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "guide_reviews",
        {

            guide_review_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,

            },

            guide_review_title: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            
            guide_review_content: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

            guide_review_date: {
                type: DataTypes.DATE,
                allowNull: false
            },

            guide_review_state: {
                type: DataTypes.STRING(255),
                allowNull : false
            }

        },
        {
            charset: "utf8mb4",
            collate: "utf8mb4_0900_ai_ci",
            timestamps: false,
        }
    )
}