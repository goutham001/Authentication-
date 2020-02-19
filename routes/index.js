const authController = require('../controller/auth.controller');
module.exports = function(app) {
    app.post('/auth', authController.verifyAuth);
};