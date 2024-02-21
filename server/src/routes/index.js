const { Router }= require('express');
const router = Router();
const routerRegister = require('./register_router');
const routerLogin = require('./login_router');
const routerUsers= require('./users_router');
const routerLeads = require('./leads_router')
const routerLotes = require('./lotes_router')
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arielalegre98@gmail.com",
      pass: "Programador98",
    },
  });
  
  router.post("/send-email", async (req, res) => {
    try {
      const { pdfData } = req.body;
  
      // Decodificar el PDF desde base64
      const pdfBuffer = Buffer.from(pdfData, "base64");
  
      const mailOptions = {
        from: "tucorreo@gmail.com",
        to: "destinatario@gmail.com", // dirección de correo del destinatario
        subject: "Asunto del correo",
        text: "Cuerpo del correo",
        attachments: [
          {
            filename: "formulario.pdf",
            content: pdfBuffer,
            encoding: "base64",
          },
        ],
      };
  
      // Enviar el correo
      await transporter.sendMail(mailOptions);
  
      res.status(200).send("Correo enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).send("Error al enviar el correo");
    }
  });

router.use('/', routerRegister, routerLogin, routerUsers, routerLeads, routerLotes)


module.exports = router