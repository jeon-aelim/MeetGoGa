module.exports = db => {

    db.PackageReview.belongsTo(db.Package, {
      foreignKey: 'package_id'
    });

    
    db.PackageReview.belongsTo(db.User, {
      foreignKey: 'user_id'
    });

  }