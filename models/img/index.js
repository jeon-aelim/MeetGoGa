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
            charset: "utf8mb4",
            collate: "utf8mb4_0900_ai_ci",
            timestamps: false,
        }
    )
}