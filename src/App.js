import React from "react";
import "./App.css";

import Header from "./components/Header";
import PostBoardCard from "./components/PostBoardCard";
import SimpleReactLightbox from "simple-react-lightbox";
// import ExampleBoard from "./components/ExampleBoard";
import SiteButton from "./components/SiteButton";
import IntroInfoBlock from "./components/IntroInfoBlock";


function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <Header />
        {/* <IntroInfoBlock /> */}
        {/* <SiteButton /> */}
        <PostBoardCard />
        {/* <ExampleBoard /> */}
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
