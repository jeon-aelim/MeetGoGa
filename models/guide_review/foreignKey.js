module.exports = db => {

    db.GuideReview.belongsTo(db.Guide, {
      foreignKey: 'guide_id'
    });

    
    db.GuideReview.belongsTo(db.User, {
      foreignKey: 'user_id'
    });
  

  }