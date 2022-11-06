const serviciosService = require('../services/serviciosService');

const getServicios = async (req, res) => {
    try {
        const get = await serviciosService.getServicios(res);
        res.status(202).json(get);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
}

module.exports = {
    getServicios,
}