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
            charset: "utf8",
            collate: "utf8_general_ci",
            timestamps: false,
        }
    )
}