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
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <Header />
        <NewUserInfoAccordion />
        <ArticleBlock />
        <IntroInfoBlock />
        {/* <SiteButton /> */}
        {/* <PostBoardCard /> */}
        {/* <ExampleBoard /> */}
        <Footer />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
