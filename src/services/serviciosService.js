const { db } = require('../config/dbConfig')


const getServicios = async (req, res) => {
    try {
     const snapshot = await db.collection('servicio').get();
        return snapshot.docs.map(doc => ({
            id: doc.id,
            modal: doc.data().modal,
            texto: doc.data().texto,
            titulo: doc.data().titulo
        }))
    } catch (err) {
         return res.status(404).send(err);
    };

};

module.exports = {
    getServicios
}