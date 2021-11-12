const MhsRoutes = require('express').Router()
const controller = require('../controllers/Mahasiswa')

MhsRoutes.get('/angkatan', async (req, res) => {
    const data = await controller.angkatan(req, res)
    res.status(200).send({
        data: data
    })
})

module.exports = MhsRoutes