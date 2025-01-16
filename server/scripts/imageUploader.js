import axios from "axios";

// TAKES IN A FILE AND UPLOADS IT TO CLOUDINARY, WHILE RETURNING
// IMPORTANT IMAGE URL & ID TO SAVE TO DB TO RESPECTATIVE ITEM
async function imageUploader(files) {
  // NEW FORM DATA VARIABLE FOR UPLOADING
  const formData = new FormData();
  formData.append("file", files);
  formData.append("upload_preset", "ml_default");

  let { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/dytbnvgzg/image/upload/",
    formData
  );
  // HANDLES ERROR HANDLING
  if (data === undefined) {
    return;
  }

  // RETURNS IMAGE URLS AND IDs
  return {
    publicID: data.public_id,
    secureURL: data.secure_url,
    url: data.url,
  };
}

export default imageUploader;
