const express = require('express');
const router = express.Router();
const emailCotroller = require('../../controllers/emailController');
const servicioController = require('../../controllers/serviciosControllers')


router
    .get('/', function (req, res) {
        res.send('Volcan Prodcutora API')
    })
    .post('/', emailCotroller.postSendEmail)
    .get('/servicio/get', servicioController.getServicios)

module.exports = router;