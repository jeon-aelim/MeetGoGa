module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "review_comments",
        {

            review_comment_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            review_comment_content: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

            review_comment_date: {
                type: DataTypes.DATE,
                allowNull: false
            },

            review_comment_parents : {
                type: DataTypes.INTEGER,
                allowNull: true
                
            },

            review_comment_state : {
                type: DataTypes.STRING(255),
                allowNull: false
                
            }

        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}