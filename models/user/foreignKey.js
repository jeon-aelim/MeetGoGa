module.exports = (db) => {

    db.User.hasMany(db.GuideGrade, {
        foreignKey: "user_id",
        sourceKey: "user_id"
    });

    db.User.hasMany(db.GuideReview, {
        foreignKey: "user_id",
        sourceKey: "user_id"
    });

    db.User.hasMany(db.GuideMark, {
        foreignKey: "user_id",
        sourceKey: "user_id"
    });

    db.User.hasMany(db.PackageGrade, {
        foreignKey: "user_id",
        sourceKey: "user_id"
    });

    db.User.hasMany(db.PackageReview, {
        foreignKey: "user_id",
        sourceKey: "user_id"
    });

    db.User.hasMany(db.PackageMark, {
        foreignKey: "user_id",
        sourceKey: "user_id"
    });

}