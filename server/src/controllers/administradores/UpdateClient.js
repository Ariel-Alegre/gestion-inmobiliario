const { Leads } = require('../../db');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dz0lruj7k',
  api_key: '128323134832632',
  api_secret: '04JixT8UcmHYY-QfbwSTBzT-L7I'
});

module.exports = {
  UpdateClient: async (req, res) => {
    const { clientId } = req.params;
    const {
      name, 
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
    } = req.body;

    try {
      const client = await Leads.findByPk(clientId);
      if (!client) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
      }

      let identify = '';
      let proof = '';

      const identifyFile = req.files && req.files['identify'] && req.files['identify'][0];
      const proofFile = req.files && req.files['proof'] && req.files['proof'][0];

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

      // Actualizar propiedades solo si se proporcionan en la solicitud
      if (name) client.name = name;
      if (email) client.email = email;
      if (phone) client.phone = phone;
      if (nationality) client.nationality = nationality;
      if (curp) client.curp = curp;
      if (country_of_origin) client.country_of_origin = country_of_origin;
      if (rfc) client.rfc = rfc;
      if (occupation) client.occupation = occupation;
      if (civil_status) client.civil_status = civil_status;
      if (lote) client.lote = lote;
      if (country) client.country = country;
      if (state) client.state = state;
      if (municipality) client.municipality = municipality;
      if (address) client.address = address;
      if (identify) client.identify_oficial = identify;
      if (proof) client.proof_of_address = proof;

      // Guardar los cambios en la base de datos sin cambiar la posición
      await client.save();

      console.log('Cliente actualizado');
      res.status(200).json({ message: 'Cliente actualizado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
