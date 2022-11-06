const { EMAIL_USER } = require('../config/variablesConfig');
const { transporter } = require('../config/emailConfig');

const postSendEmail = async (nombre, empresa, email, opcion, textarea,res) => {
    try {
        const mailOption = {
            from: empresa,
            to: EMAIL_USER,
            subject: `${nombre} te quiere contactar`,
            text: `${nombre} de la empresa: ${empresa}, selecciono la opcion ${opcion}. ${textarea}. mail de ocntacto ${email}`
        };

        if (!nombre || !email || !opcion || !textarea || typeof nombre !== "string" || typeof email !== "string" || typeof opcion !== "string" || typeof textarea !== "string") {
            res.status(404).send('error')
        }
        else {
            transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                console.log(error)
                res.status(404).send('error en el envio del email')
            } else {
                console.log('email enviado')
                res.status(202).send('email enviado')
            }
        });
        }
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

module.exports = {
    postSendEmail
}