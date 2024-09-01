import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/qr-code', { text });
      setQrCode(response.data.qrCode);
      setError('');
    } catch (err) {
      console.error('Error:', err); // Log the error to the console
      setError('Error generating QR code');
      setQrCode('');
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {error && <p>{error}</p>}
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
}

export default App;
