module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "imgs",
        {

            img_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },

            img_url: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

        },
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}