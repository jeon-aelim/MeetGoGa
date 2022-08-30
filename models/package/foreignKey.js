module.exports = db => {

  db.Package.belongsTo(db.Guide, {
    foreignKey: 'guide_id' 
  });
  
  
  }