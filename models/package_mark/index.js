module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "package_marks",
        {

            package_mark_id: {
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