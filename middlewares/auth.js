const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretkey').secretKey;
const options = require('../config/secretkey').option;

module.exports = {
    sign: (body) => {

        const payload = {
            id: body.guide_id,
            name: body.guide_nickname
        };

        const result = {
            // access token 발급
            token: jwt.sign(payload, secretKey, options)
        };

        console.log("jwt");
        console.log(result);
        return result;
    },

    verify: (token) => {
        let decoded;
        try {
            // verify를 통해 값 decode!
            decoded = jwt.verify(token, secretKey);
            console.log(decoded);
            console.log("decoded");
            return decoded;

        } catch (err) {
            if (err.message === 'jwt expired') { // 기간 만료
                console.log('expired token');
                throw err;
            } else if (err.message === 'invalid token') { // 유효하지 않음
                console.log('invalid token');
                throw err;
            } else {
                console.log("invalid tokens");
                throw err;
            }
        }
       
    }
}


// const jwt = require('../config/jwt');

// exports.verifyToken = (req, res, next) => {
//     try {
//         const isToken = jwt.verify(req.headers.token);
//         const userId = req.body.user_id;
//         console.log(isToken); // decoded - 사용자 정보
//         if (isToken.id == userId) {
//             return next();
//         }
//     } catch (err) {
//         console.log("vertify token err");
//     }
// }