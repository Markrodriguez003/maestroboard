
// APP CSS
import "./components/css/App.css";

// LIBS
import { Cloudinary } from "@cloudinary/url-gen";
// CLOUDINARY
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import axios from "axios";
import { useState } from "react";

// PAGES
import Login from "./components/pages/Login";
import News from "./components/pages/News";
import CommunityBoard from "./components/pages/CommunityBoard";
import Forum from "./components/Forum";
import PageNotFound from "./components/pages/PageNotFound";
// ! change to home
import IntroSplashPage from "./components/IntroSplashPage";
import Dashboard from "./components/pages/Dashboard";

import SignUpForm from "./components/SignUpForm";
import NewsArticlePage from "./components/NewsArticlePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/ui/Footer";
import BackgroundTexture from "./components/ui/BackgroundTexture"

function App() {





  const [image, setImage] = useState();

  function UploadImages(files) {
    console.log(image)
    const formData = new FormData();
    formData.append('file', image[0]);
    formData.append('upload_preset', "ml_default");

    axios.post("https://api.cloudinary.com/v1_1/dytbnvgzg/image/upload/", formData).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(`Failure to upload image ${error}`)
    })

  };


  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  //   const myImage = cld.image('/maestroboard/article-imgs/Article-7_npfx0h');

  const myImage = cld.image('Logo1_-_Black_hvlovn');

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(fill().width(250).height(250));




  return (
    <Router>
      <Header />
      <div style={{ backgroundColor: "red", width: "500px", height: "500px", display: "flex", justifyContent: 'center', alignContent: "center" }}>
        <input type="file"
          onChange={(event) => {
            // UploadImages(event.target.files)
            setImage(event.target.files)
          }} />
        <button onClick={UploadImages}>Upload Image</button>
      </div>
      <Routes>
        <Route path="/" element={<IntroSplashPage />}></Route>
        <Route path="/home" element={<IntroSplashPage />}></Route>
        <Route path="/board" element={<CommunityBoard />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/article" element={<NewsArticlePage />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="*"
          element={<PageNotFound />}
        />


      </Routes>

      <AdvancedImage cldImg={myImage} />
      <Footer />
    </Router>
  );
}

export default App;
