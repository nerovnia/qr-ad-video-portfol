import { useState, useEffect } from "react";
import { getQrCodeImage } from "../requests/requests";


const isValidBase64Char = (char: string) => {
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  return validChars.includes(char);
};


const getInvalidBase64Char = (base64String) => {
  for (let i = 0; i < base64String.length; i++) {
    if (!isValidBase64Char(base64String[i])) {
      console.log(`Invalid character found at index ${i}: ${base64String[i]}`);
    }
  }
}



const decodeBase64 = (base64String: string) => {
  getInvalidBase64Char(base64String);
  const binaryString = atob(base64String);

  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

export function QRCodeImage() {

  const [image, setImage] = useState(null);
  useEffect(() => {
    //getQrCodeImage()().then((image: string) => setImage(image));
    getQrCodeImage()().then((image: string) => setImage(decodeBase64(image)));
    //getQrCodeImage()().then((image: string) => console.log(typeof image));
    //console.log(getQrCodeImage());
    //setImage(await getQrCodeImage());
  }, []);
  /*  const r = async () => {
    console.log('***************************');
    console.log(await getQrCodeImage());
    setImage(await getQrCodeImage());
  }*/
  //r();
  //console.log(getQrCodeImage())
  //const decodedData = decodeBase64(req.qrcode);
  //const imageUrl = URL.createObjectURL(new Blob([decodedData]));

  return (
    <>
      <img src={image} alt="QRCode" />
    </>
  );
}
