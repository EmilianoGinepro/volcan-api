const { db } = require('../config/dbConfig')

const getServicios = async (req, res) => {
    try {
           const serv = await db.ref('servicio').once('value', (snapshot) => {
            snapshot.val();
        });
        return serv
    } catch (err) {
        return res.status(404).send(err);
    };
};

module.exports = {
    getServicios
}