const emailService = require('../services/emailService');

const postSendEmail = async (req, res) => {
    const { body } = req;
    const { nombre, empresa, email, opcion, textarea } = body;

    try {
        const sendEmail = await emailService.postSendEmail(nombre, empresa, email, opcion, textarea);
        res.status(202).json(sendEmail)
    } catch (err) {
        console.log(err);
        res.status(404).send(err)
    }
};

module.exports = {
    postSendEmail
}