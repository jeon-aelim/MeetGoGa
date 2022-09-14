module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "packages",
        {

            package_id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },

            package_title: {
                type: DataTypes.STRING,
                allowNull: false
            },

            package_content: {
                type: DataTypes.STRING,
                allowNull: false
            },

            package_category: {
                type: DataTypes.STRING,
                allowNull: false
            },
            
            package_location: {
                type: DataTypes.STRING,
                allowNull: false
            },

            package_start_date: {
                type: DataTypes.DATE,
                allowNull: false
            },

            package_finish_date: {
                type: DataTypes.DATE,
                allowNull: false
            },

            package_price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            
            package_kakao_url: {
                type: DataTypes.STRING
            },

        },
        
        {
            charset: "utf8mb4",
            collate: "utf8mb4_0900_ai_ci",
            timestamps: false,
        }
    )
}