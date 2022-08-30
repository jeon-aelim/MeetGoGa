module.exports = db => {

    db.GuideMark.belongsTo(db.Guide, {
      foreignKey: 'guide_id'
    });

    
    db.GuideMark.belongsTo(db.User, {
      foreignKey: 'user_id'
    });
  
  }