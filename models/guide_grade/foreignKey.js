module.exports = (db) => {
    db.GuideGrade.belongsTo(db.Guide, {
      foreignKey: 'guide_id'
    });

    
    db.GuideGrade.belongsTo(db.User, {
      foreignKey: 'user_id'
    });
  

  
  }