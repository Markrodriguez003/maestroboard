import React from "react";
import "./App.css";

import Header from "./components/Header";
import IntroCard from "./components/IntroCard";
import SimpleReactLightbox from "simple-react-lightbox";
// import ExampleBoard from "./components/ExampleBoard";
// import SiteButton from "./components/SiteButton";

function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <Header />
        <IntroCard />
        {/* <SiteButton /> */}
        {/* <ExampleBoard /> */}
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
