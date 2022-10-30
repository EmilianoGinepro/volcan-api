const express = require('express');
const router = express.Router();
const apiCache = require('apicache');
const emailCotroller = require('../../controllers/emailController');
const servicioController = require('../../controllers/serviciosControllers')

const cache = apiCache.middleware

router
    .get('/', function (req, res) {
        res.send('Volcan Prodcutora API')
    })
    .post('/', emailCotroller.postSendEmail)
    .get('/servicio/get', cache("1 minutes"), servicioController.getServicios)

module.exports = router;