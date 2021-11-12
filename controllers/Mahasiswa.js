const pool = require('../database/index')
module.exports.angkatan = angkatan = async (req, res) => {
    const data = await pool.query('SELECT kdTahunAngkatan FROM tb_mahasiswa GROUP BY kdTahunAngkatan ORDER BY kdTahunAngkatan DESC')

    return res.status(200).send(data.rows)
}

module.exports.globalSearch = globalSearch = async (req, res) => {
    const search = req.body.search
    const angkatan = req.body.angkatan
    if (!search)
        return res.status(422).send({
            'status': 422,
            'message': 'Search field can`t be empty'
        })

    if (search.match('^[0-9]+$')) {
        data = await pool.query('SELECT * FROM tb_mahasiswa WHERE nimMsMhs = $1', [search])
        if (angkatan) {
            data = await pool.query('SELECT * FROM tb_mahasiswa WHERE nimMsMhs = $1 AND kdTahunAngkatan = $2', [search, angkatan])
        }
    } else {
        data = await pool.query('SELECT * FROM tb_mahasiswa WHERE namaMhs LIKE $1', [`%${search.toUpperCase()}%`])
        if (angkatan) {
            data = await pool.query('SELECT * FROM tb_mahasiswa WHERE namaMhs LIKE $1 AND kdTahunAngkatan = $2', [`%${search.toUpperCase()}%`, angkatan])
        }
    }

    if (data.rowCount > 0)
        return res.status(200).send(data.rows)
    else
        return res.status(404).send({
            'status': 404,
            'message': 'No Data Found in Database'
        })
}