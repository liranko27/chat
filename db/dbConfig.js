const dotenv = require('dotenv')
dotenv.config()

const dbConfig = {
    host: "localhost",
    database: "chat",
    user: dotenv.DB_USERNAME,
    password: dotenv.DB_PASSWORD
}

module.exports = dbConfig;