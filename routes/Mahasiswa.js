const MhsRoutes = require('express').Router()
const controller = require('../controllers/Mahasiswa')

MhsRoutes.get('/angkatan', async (req, res) => {
    const data = await controller.angkatan(req, res)
    res.status(200).send({
        data: data
    })
})

MhsRoutes.get('/totalMhs', async (req, res) => {
    await controller.totalMhs(req, res)
})

MhsRoutes.get('/angkatan', async (req, res) => {
    await controller.angkatan(req, res)
})


MhsRoutes.post('/globalsearch', async (req, res) => {
    await controller.globalSearch(req, res)
})


module.exports = MhsRoutes