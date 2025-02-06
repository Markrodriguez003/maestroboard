// CLOUDINARY
const cloudinary = require("cloudinary").v2;

// CLOUDINARY ADMIN CONFIG
cloudinary.config({
  cloud_name: "dytbnvgzg",
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
  secure: false,
  // signature_algorithm: 'sha256'
});

// ? NOTES
// https://stackoverflow.com/questions/58729264/delete-image-from-clodinary-using-axios-delete
// ? NOTES https://support.cloudinary.com/hc/en-us/articles/203465641-How-can-I-delete-an-image-via-the-API-Programmable-Media
// ? https://stackoverflow.com/questions/57247914/how-can-i-remove-an-image-in-a-custom-folder-in-cloudinary-by-nodejs

// * DELETES AN ENTIRE ARTICLE + IMAGES ASSOCIATED IN CLOUDINARY
async function deleteImages(image_id_array) {
  // TESTING
  // console.log(`Images to be deleted! --> ${JSON.stringify(image_id_array)}  `);

  // DELETING IMAGES ASSOCIATED WITH ARTICLE
  cloudinary.api.delete_resources(image_id_array, (error, result) => {
    if (error) {
      console.error("Error deleting resources:", error);
    } else {
      console.log("Resources deleted successfully:", result);
    }
  });
}

module.exports = deleteImages;
// export default deleteImages;

// OLD CODE
// import axios from "axios";
// import { Cloudinary } from "@cloudinary/url-gen";
// async function deleteImage(images) {
//   console.log(`Images to be deleted! --> ${images}`);

//   const cloudName = "dytbnvgzg";
//   const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
//   const api_secret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
//   const timestamp = new Date().getTime();
//   // const signature = generateHash(generateSignature(images, api_secret));

//   axios
//     .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
//       public_id: images,
//       // signature: signature,
//       api_key: apiKey,
//       timestamp: timestamp,
//     })
//     .then((response) => {
//       console.log("Image deleted from cloudinary: ", response);
//     })
//     .catch((error) => {
//       console.error("Unable to delete image: ", error);
//     });
// }
