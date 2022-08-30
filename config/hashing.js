module.exports = {
    enc : (password, salt) => {
        const sha256 = require('sha256');

        return sha256(password + salt);
    }
}