module.exports = db => {

    db.Member.belongsTo(db.Package, {
      foreignKey: 'package_id'
    });

    
    db.Member.belongsTo(db.User, {
      foreignKey: 'user_id'
    });
  

  
  }