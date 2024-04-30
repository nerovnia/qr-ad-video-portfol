import { useState, useEffect } from "react";
import { getQrCodeImage } from "../requests/requests";

const decodeBase64 = (base64String: string): Uint8Array => {
  const binaryString = atob(base64String);

  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: 'image/png' });
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
};

export function QRCodeImage() {

  const [image, setImage] = useState<Uint8Array>(new Uint8Array());
  useEffect(() => {
    getQrCodeImage()()
    .then((image: string) => setImage(decodeBase64(image)))
    .catch((error)=> console.log(error));
  }, []);

  return (
    <>
      <img src={image} alt="QRCode" />
    </>
  );
}
