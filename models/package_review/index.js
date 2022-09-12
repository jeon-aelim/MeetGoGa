module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "package_reviews",
        {

            package_review_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },

            package_review_title: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            
            package_review_content: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

            package_review_date: {
                type: DataTypes.DATE,
                allowNull: false
            },

            package_review_state: {
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