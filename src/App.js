// REACT COMPONENTS
import React from "react";

// APP CSS
import "./components/css/App.css";

// SITE COMPONENTS
import Header from "./components/Header";
import ArticleBlock from "./components/ArticleBlock";
import SimpleReactLightbox from "simple-react-lightbox";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import Corkboard from "./components/CorkBoard";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div>
      <SimpleReactLightbox>
        {/* <ArticleBlock /> */}
        {/* <Login /> */}
        {/* <SignUpForm/> */}
        <Corkboard />
        {/* <MyProfile /> */}
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
