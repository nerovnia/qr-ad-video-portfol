import { useState, useEffect } from "react";
import { getQrCodeImage } from "../requests/requests";
import { decodeBase64 } from "../utils/converters";
import { ImageBase64 } from "../types/types";

export function QRCodeImage() {



  const [image, setImage] = useState<ImageBase64>({mtype: '', data: new Uint8Array()});
  useEffect(() => {
    getQrCodeImage()()
    .then((image: ImageBase64) => setImage(
      {
        mtype: image.mtype, 
        data: decodeBase64(image.data)
      }
    ))
    .catch((error: string)=> console.log(error));
  }, []);

  return (
    <>
      <img src={image.data  } alt="QRCode" />
    </>
  );
}
