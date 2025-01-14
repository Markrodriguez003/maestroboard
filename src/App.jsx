
// APP CSS
import "./components/css/App.css";

// LIBS
import { Cloudinary } from "@cloudinary/url-gen";
// CLOUDINARY
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

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

  /* 
  
  
  
  VITE_CLOUDINARY_NAME = dytbnvgzg
  VITE_CLOUDINARY_API_KEY = 862698915265588
  VITE_CLOUDINARY_API_SECRET = LdB05z3FBqSLQTVyx3iRxNW98YA
  
  */


  // // Create a Cloudinary instance and set your cloud name.
  // const cld = new Cloudinary({
  //   cloud: {
  //     // cloudName: import.meta.env.VITE_CLOUDINARY_NAME
  //     cloudName: "dytbnvgzg",
  //     apiKey: "862698915265588",
  //     api_secret: "LdB05z3FBqSLQTVyx3iRxNW98YA",
  //     secure: false
  //   }
  // });





  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  // const myImage = cld.image('docs/models/Article-7_npfx0h');

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(fill().width(250).height(250));

  // console.log(`myImage:::${myImage}`);



  return (
    <Router>
      <Header />
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

      {/* <AdvancedImage cldImg={myImage} /> */}
      <Footer />
    </Router>
  );
}

export default App;
