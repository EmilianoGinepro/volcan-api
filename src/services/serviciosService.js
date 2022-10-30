const { db } = require('../config/dbConfig')

const getServicios = async (req, res) => {
    try {
          /*  const serv = await db.ref('servicio').once('value', (snapshot) => {
            snapshot.val();
        }); */
        const servicioRef = db.ref('servicio')
        const data = await servicioRef.get()
        return data
    } catch (err) {
        return res.status(404).send(err);
    };
};

module.exports = {
    getServicios
}