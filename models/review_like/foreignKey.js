module.exports = db => {

    db.ReviewLike.belongsTo(db.PackageReview, {
        foreignKey: 'package_review_id'
    });

    db.ReviewLike.belongsTo(db.GuideReview, {
        foreignKey: 'guide_review_id'
    });

    db.ReviewLike.belongsTo(db.User, {
        foreignKey: 'user_id'
    });


}