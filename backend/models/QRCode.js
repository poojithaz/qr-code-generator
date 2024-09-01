const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  qrCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('QRCode', qrCodeSchema);
