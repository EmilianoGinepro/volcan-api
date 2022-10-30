const { EMAIL_USER } = require('../config/config');
const { transporter } = require('../config/emailConfig');

const postSendEmail = async (nombre, empresa, email, opcion, textarea) => {
    try {
        const mailOption = {
            from: empresa,
            to: EMAIL_USER,
            subject: `${nombre} te quiere contactar`,
            text: `${nombre} de la empresa: ${empresa}, selecciono la opcion ${opcion}. ${textarea}. mail de ocntacto ${email}`
        };

        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('email enviado')
            }
        });
    } catch (err) {
        return res.status(404).send(err);
    }
};

module.exports = {
    postSendEmail
}