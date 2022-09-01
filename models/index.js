'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV ? 'production' : 'development';
const config = require(path.join(__dirname, 'home/hosting_users/bcd1031/apps/bcd1031_meetgoga', 'config', 'db.json'))[
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
            charset: 'utf8mb4',
            collate: 'utf8mb4_0900_ai_ci',
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
db.User = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/user')(sequelize, Sequelize);
db.Guide = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide')(sequelize, Sequelize);
db.GuideGrade = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_grade')(sequelize, Sequelize);
db.GuideMark = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_mark')(sequelize, Sequelize);
db.GuideReview = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_review')(sequelize, Sequelize);
db.Package = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package')(sequelize, Sequelize);
db.PackageGrade = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_grade')(sequelize, Sequelize);
db.PackageMark = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_mark')(sequelize, Sequelize);
db.PackageReview = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_review')(sequelize, Sequelize);
db.Img = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/img')(sequelize, Sequelize);
db.Member = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/member')(sequelize, Sequelize);
db.ReviewComment = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/review_comment')(sequelize, Sequelize);
db.ReviewLike = require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/review_like')(sequelize, Sequelize);


// 관계형 지정
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/user/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_grade/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_mark/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/guide_review/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_grade/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_mark/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/package_review/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/img/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/member/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/review_comment/foreignKey')(db);
require('/home/hosting_users/bcd1031/apps/bcd1031_meetgoga/review_like/foreignKey')(db);

module.exports = db;
