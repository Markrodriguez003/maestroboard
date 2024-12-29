// REACT COMPONENTS
import React from "react";

// APP CSS
import "./components/css/App.css";

// SITE COMPONENTS
import IntroSplashPage from "./components/IntroSplashPage";
import SimpleReactLightbox from "simple-react-lightbox";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import Corkboard from "./components/CorkBoard";
import MyProfile from "./components/MyProfile";
import Forum from "./components/Forum";
import CommunityBoard from "./components/pages/CommunityBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <SimpleReactLightbox>
          <Header />
          <Switch>
            <Route path="/board" exact component={CommunityBoard} />
            <Route path="/" exact component={IntroSplashPage} />
            <Route path="/news" exact component={IntroSplashPage} />
            <Route path="/forum" component={Forum} />
            {/* <Route path="/myprofile" component={MyProfile} /> */}
            {/* <Route path="/main" component={IntroSplashPage} /> */}
            {/* <Route path="/home" component={IntroSplashPage} /> */}
            {/* <Route path="/board" component={Corkboard} /> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUpForm} />
          </Switch>
          <br />
          {/* <Header /> */}
        </SimpleReactLightbox>
      </div>
    </Router>
  );
}

export default App;
