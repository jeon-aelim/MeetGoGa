module.exports = db => {

    db.ReviewComment.belongsTo(db.PackageReview, {
        foreignKey: 'package_review_id'
    });

    db.ReviewComment.belongsTo(db.GuideReview, {
        foreignKey: 'guide_review_id'
    });

    db.ReviewComment.belongsTo(db.User, {
        foreignKey: 'user_id'
    });


}