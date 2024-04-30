import axios from 'axios';

export function getQrCodeImage() {
  return async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      const base64img = response?.data.qrcode.split(',')[1];
      return base64img;
    } catch (err) {
      console.log(err);
    }
  }
}

