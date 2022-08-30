module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "guides",
        {

            guide_id: {
                primaryKey : true,
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true
            },

            guide_password: {
                type: DataTypes.STRING(255),
                allowNull:false
            },

            guide_name: {
                type: DataTypes.STRING(255),
                allowNull:false
            },

            guide_email: {
                type: DataTypes.STRING(255),
                allowNull:false,
                unique:true
            },

            guide_gender: {
                type: DataTypes.STRING(255),
                allowNull:false
            },

            guide_phone_number: {
                type: DataTypes.STRING(255),
                allowNull:false,
                unique:true
            },

            guide_nickname: {
                type: DataTypes.STRING(255),
                allowNull:false,
                unique:true
            },

            guide_cert: {
                type: DataTypes.STRING(255),
                allowNull:false
            },

            guide_img: {
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