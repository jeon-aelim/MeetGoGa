module.exports = db => {

    db.PackageGrade.belongsTo(db.Package, {
      foreignKey: 'package_id'
    });

    
    db.PackageGrade.belongsTo(db.User, {
      foreignKey: 'user_id'
    });
  

  
  }