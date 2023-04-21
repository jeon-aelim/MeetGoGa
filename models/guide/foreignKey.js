module.exports = (db)=> {
  
    db.Guide.hasMany(db.GuideGrade, {
      foreignKey: "guide_id",
      sourceKey: "guide_id"
    });
  
    db.Guide.hasMany(db.GuideReview, {
      foreignKey: "guide_id",
      sourceKey: "guide_id"
    });

    db.Guide.hasMany(db.GuideMark, {
      foreignKey: "guide_id",
      sourceKey: "guide_id"
    });
  
    db.Guide.hasMany(db.Package, {
      foreignKey: "guide_id",
      sourceKey: "guide_id"
    });
  
  }