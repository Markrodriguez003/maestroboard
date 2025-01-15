import { Cloudinary } from "@cloudinary/url-gen";
/* 
  
  
  
  VITE_CLOUDINARY_NAME = dytbnvgzg
  VITE_CLOUDINARY_API_KEY = 862698915265588
  VITE_CLOUDINARY_API_SECRET = LdB05z3FBqSLQTVyx3iRxNW98YA
  
  */

// * Create a Cloudinary instance and set your cloud name.
export const cld = new Cloudinary({
  cloud: {
    // cloudName: import.meta.env.VITE_CLOUDINARY_NAME
    cloudName: "dytbnvgzg",
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
    api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
    secure: false,
  },
});
