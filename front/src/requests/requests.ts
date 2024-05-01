import axios from 'axios';
import { ImageBase64 } from "../types/types";

export function getQrCodeImage(): Promise<ImageBase64> {
  return async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      const separateTypeAndDataString = response?.data.qrcode.split(',');
      const base64img: ImageBase64 = {
        mtype: separateTypeAndDataString[0].slice(5,-7),
        data: separateTypeAndDataString[1]
      }
      return base64img;
    } catch (err) {
      console.log(err);
    }
  }
}

