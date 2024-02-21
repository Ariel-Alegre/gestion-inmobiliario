const { Leads, Lotes } = require('../../db');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: 'dz0lruj7k',
  api_key: '128323134832632',
  api_secret: '04JixT8UcmHYY-QfbwSTBzT-L7I'
});

module.exports = {
  AddLead: async (req, res) => {
    const {
      name,
      lastName,
      birthDate,
      age,
      ine_passport,
      name_conyugue,
      outdoor_Number,
      fractionation_or_colony,
      municipality_or_mayor,
      postal_code,
      email,
      phone,
      nationality,
      curp,
      country_of_origin,
      rfc,
      occupation,
      civil_status,
      age_conyugue,
      lote,
      country,
      state,
      municipality,
      address,
    } = req.body;

    try {
      let identify = '';
      let proof = '';
      let avatar = '';


      const identifyFile = req.files && req.files['identify'] && req.files['identify'][0];

      const proofFile = req.files && req.files['proof'] && req.files['proof'][0];

      const avatarFile = req.files && req.files['avatar'] && req.files['avatar'][0];


      if (identifyFile) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(identifyFile.path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        console.log('Imagen de identificación oficial subida:', cloudinaryUploadResult.secure_url);
        identify = cloudinaryUploadResult.secure_url;
      }

      if (proofFile) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(proofFile.path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        console.log('Imagen de comprobante de domicilio subida:', cloudinaryUploadResult.secure_url);
        proof = cloudinaryUploadResult.secure_url;
      }


      if (avatarFile) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(avatarFile.path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        console.log('Foto del cliente   subida:', cloudinaryUploadResult.secure_url);
        avatar = cloudinaryUploadResult.secure_url;
      }

      const newPost = await Leads.create({
        name,
        lastName,
        birthDate,
        name_conyugue,
        age_conyugue,
        age,
        ine_passport,
        outdoor_Number,
        fractionation_or_colony,
        municipality_or_mayor,
        postal_code,
        avatar: avatar,
        email,
        phone,
        nationality,
        curp,
        country_of_origin,
        rfc,
        occupation,
        civil_status,
        lote,
        country,
        state,
        municipality,
        address,
        identify_oficial: identify,
        proof_of_address: proof,
      },
   
      );

      console.log('Lead creado correctamente');
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Error al crear el Lead:', error);
      res.status(500).json({ error: 'Ocurrió un error al crear el Lead' });
    }
  }
};
