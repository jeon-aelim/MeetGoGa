module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "review_likes",
        {

            review_like_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
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