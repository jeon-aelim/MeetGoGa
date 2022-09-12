'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV ? 'production' : 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[
    env
    ];
const db = {};

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        },
        logging: false
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
  
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database: ', err);
    });

// 테이블 생성
db.User = require('./user')(sequelize, Sequelize);
db.Guide = require('./guide')(sequelize, Sequelize);
db.GuideGrade = require('./guide_grade')(sequelize, Sequelize);
db.GuideMark = require('./guide_mark')(sequelize, Sequelize);
db.GuideReview = require('./guide_review')(sequelize, Sequelize);
db.Package = require('./package')(sequelize, Sequelize);
db.PackageGrade = require('./package_grade')(sequelize, Sequelize);
db.PackageMark = require('./package_mark')(sequelize, Sequelize);
db.PackageReview = require('./package_review')(sequelize, Sequelize);
db.Img = require('./img')(sequelize, Sequelize);
db.Member = require('./member')(sequelize, Sequelize);
db.ReviewComment = require('./review_comment')(sequelize, Sequelize);
db.ReviewLike = require('./review_like')(sequelize, Sequelize);


// 관계형 지정
require('./user/foreignKey')(db);
require('./guide/foreignKey')(db);
require('./guide_grade/foreignKey')(db);
require('./guide_mark/foreignKey')(db);
require('./guide_review/foreignKey')(db);
require('./package/foreignKey')(db);
require('./package_grade/foreignKey')(db);
require('./package_mark/foreignKey')(db);
require('./package_review/foreignKey')(db);
require('./img/foreignKey')(db);
require('./member/foreignKey')(db);
require('./review_comment/foreignKey')(db);
require('./review_like/foreignKey')(db);

module.exports = db;
