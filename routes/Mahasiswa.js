const MhsRoutes = require('express').Router()
const controller = require('../controllers/Mahasiswa')
const middleware = require('../middleware/index')

MhsRoutes.post('/login', async (req, res) => {
    await controller.login(req, res)
})

module.exports = MhsRoutes