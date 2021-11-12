const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config()
console.log('success connected to database');
const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PWD,
    database: process.env.PG_DB,
    port: process.env.PG_PORT,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect()

module.exports.query = query = (text, params) => {
    return pool.query(text, params)
}