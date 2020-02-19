const dotenv = require('dotenv').config();
module.exports = {
    name: 'API',
    version: '1',
    env: process.env.NODE_ENV || 'development',
    adminer: {
        port: process.env.APORT || 8082,
        base_url: process.env.BASE_URL || 'http://localhost:8082',
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb+srv://userx:pass@cluster0-vyrr1.mongodb.net/test?retryWrites=true&w=majority',
    },
};