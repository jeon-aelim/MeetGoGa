module.exports = db => {

    db.PackageMark.belongsTo(db.Package, {
      foreignKey: 'package_id'
    });

    
    db.PackageMark.belongsTo(db.User, {
      foreignKey: 'user_id'
    });
  

  
  }