module.exports.connect = connect = () => {
    const Pool = require('pg').Pool
    const dotenv = require('dotenv')
    dotenv.config()
    try {
        new Pool({
            user: process.env.PG_USER,
            host: process.env.PG_HOST,
            database: process.env.PG_DB,
            password: process.env.PG_PWD,
            port: process.env.PG_PORT,
        })
        console.log('success connected to database');
    } catch (e) {
        throw e
    }
}