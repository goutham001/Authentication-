const { verify } = require('../services/jwt.service');
module.exports = {
    verifyAuth(req, res) {
        let verifiedToken = verify(req.headers.authorization);
        console.log(verifiedToken)
        let roles = req.body;
        console.log(`roles:  ${roles}`);
        if (!roles.some(r => verifiedToken.role.indexOf(r) >= 0))
            res.send(false);
        else
            res.send(true);
    }
}