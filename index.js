const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const config = require('./database/index')
const MhsRoutes = require('./routes/Mahasiswa')
const middleware = require('./middleware/index')
const cors = require('cors')
config.connect()

app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/assets', express.static(path.join(__dirname + '/public')))
hbs.localsAsTemplateData(app)
app.get('/', (req, res) => {
    res.status(201).render('index');
});
app.use(process.env.API_PREFIX, middleware.verifyApiToken, MhsRoutes)
app.get('*', (req, res) => {
    res.status(404).render('errors/404_page')
})

app.listen(process.env.PORT)