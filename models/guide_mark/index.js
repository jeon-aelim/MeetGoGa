module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "guide_marks",
        {

            guide_mark_id: {
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