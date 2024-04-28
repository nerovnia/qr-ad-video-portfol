import axios from 'axios';

export function getQrCodeImage() {
  return async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      return response?.data.qrcode;
    } catch (err) {
      console.log(err);
    }
  }
}

