const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretkey').secretKey;
const options = require('../config/secretkey').option;

module.exports = {
    sign: (guide) => {

        const payload = {
            id: guide.guide_id,
            name: guide.guide_nickname
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