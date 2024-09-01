const express = require('express');
const QRCode = require('qrcode');
const QRCodeModel = require('../models/QRCode');

const router = express.Router();

// Create QR code and save to database
router.post('/', async (req, res) => {
  const { data } = req.body;
  try {
    const qrCode = await QRCode.toDataURL(data);
    const newQRCode = new QRCodeModel({ data, qrCode });
    await newQRCode.save();
    res.status(201).json(newQRCode);
  } catch (error) {
    res.status(500).json({ message: 'Error generating QR code', error });
  }
});

// Get all QR codes
router.get('/', async (req, res) => {
  try {
    const qrCodes = await QRCodeModel.find();
    res.json(qrCodes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching QR codes', error });
  }
});

module.exports = router;
