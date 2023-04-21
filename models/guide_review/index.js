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
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}