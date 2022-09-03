module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "users",
        {

            user_id: {
                primaryKey : true,
                type: DataTypes.STRING(255),
                allowNull: false,
            },

            user_name: {
                type: DataTypes.STRING(255),
                allowNull:true
            },

            user_email: {
                type: DataTypes.STRING(255),
                allowNull:true,
                unique:true
            },

            user_gender: {
                type: DataTypes.STRING(255),
                allowNull:true
            },

            user_phone_number: {
                type: DataTypes.STRING(255),
                allowNull:true,
                unique:true
            },

            user_nickname: {
                type: DataTypes.STRING(255),
                allowNull:false,
                unique:true
            },

            user_img: {
                type: DataTypes.STRING(255),
                allowNull:false
            }


        },
        {
            charset: "utf8mb4",
            collate: "utf8mb4_0900_ai_ci",
            timestamps: false,
        }
    )
}