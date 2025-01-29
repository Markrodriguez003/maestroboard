// import { Cloudinary } from "@cloudinary/url-gen";

import axios from "axios";

// import crypto from "crypto";

// import nacl from "tweetnacl";

// const cloudinary = require('cloudinary').v2


// ? NOTES
// https://medium.com/zinc_work/using-cryptography-tweetnacl-js-to-protect-user-data-intro-tips-tricks-a8e38e1818b5

// function generateHash(hashPayload) {
  // console.log(`publicID -> ${publicID}`);
  // console.log(`apiSecret -> ${apiSecret}`);
  // console.log(`combined -> ${msg}`);

  // const hash = nacl.hash(nacl.util.decodeUTF8(hashPayload.apiSecret));

  // const hash = nacl.hash(hashPayload.apiSecret);
  // const hash = nacl.hash('najsnfajsnfjasnfjn');

  // let x = Uint8Array.fromBase64()

  // Convert the hash (Uint8Array) to a hexadecimal string
  // const hashHex = nacl.util.decodeUTF8("hex");

  // const hash = crypto.createHash("sha256").update(hashPayload).digest("hex");

  // Displays output
  // console.log(hash);
  // return hash;
// }

// function generateSignature(publicID, apiSecret) {
//   const timestamp = new Date().getTime();
//   // const hash = generateHash(publicID, apiSecret);
//   const signature = {
//     timestamp,
//     publicID,
//     apiSecret,
//   };

//   // const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
//   return signature;
// }

// https://stackoverflow.com/questions/58729264/delete-image-from-clodinary-using-axios-delete
async function deleteImage(images) {
  console.log(`Images to be deleted! --> ${images}`);

  const cloudName = "dytbnvgzg";
  const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const api_secret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
  const timestamp = new Date().getTime();
  // const signature = generateHash(generateSignature(images, api_secret));

  axios
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
      public_id: images,
      // signature: signature,
      api_key: apiKey,
      timestamp: timestamp,
    })
    .then((response) => {
      console.log("Image deleted from cloudinary: ", response);
    })
    .catch((error) => {
      console.error("Unable to delete image: ", error);
    });
}

export default deleteImage;
