module.exports = db => {

    db.Img.belongsTo(db.Package, {
        foreignKey: 'package_id'
    });

    db.Img.belongsTo(db.PackageReview, {
        foreignKey: 'package_review_id'
    });

    db.Img.belongsTo(db.GuideReview, {
        foreignKey: 'guide_review_id'
    });

}