const pool = require('../database/index')
module.exports.angkatan = angkatan = async (req, res) => {
    const data = await pool.query('SELECT COUNT(*) FROM tb_mahasiswa')

    return res.status(200).send(data.rows)

}