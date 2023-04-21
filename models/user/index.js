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
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}