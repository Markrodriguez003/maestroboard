import React from "react";
import "./components/css/App.css";

import Header from "./components/Header";
import NewUserInfoAccordion from "./components/NewUserInfoAccordion";
import ArticleBlock from "./components/ArticleBlock";
import PostBoardCard from "./components/PostBoardCard";
import SimpleReactLightbox from "simple-react-lightbox";
// import ExampleBoard from "./components/ExampleBoard";
import SiteButton from "./components/SiteButton";
import IntroInfoBlock from "./components/IntroInfoBlock";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import Corkboard from "./components/CorkBoard";


function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <Header />
        {/* <Login /> */}
        {/* <NewUserInfoAccordion /> */}
        {/* <ArticleBlock /> */}
        {/* <IntroInfoBlock /> */}
        {/* <SiteButton /> */}
        {/* <PostBoardCard /> */}
        <Corkboard />
        {/* <ExampleBoard /> */}
        {/* <SignUpForm/> */}
        {/* <Footer /> */}
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
