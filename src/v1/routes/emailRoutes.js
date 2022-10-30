const express = require('express');
const router = express.Router();
const emailCotroller = require('../../controllers/emailController');


router
    .get('/', function (req, res) {
        res.send('Volcan Prodcutora API')
    })
    .post('/', emailCotroller.postSendEmail)

module.exports = router;