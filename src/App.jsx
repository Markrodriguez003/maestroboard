
// APP CSS
import "./components/css/App.css";

// SITE COMPONENTS
import IntroSplashPage from "./components/IntroSplashPage";
import Login from "./components/Login";
// import SignUpForm from "./components/SignUpForm";

// import MyProfile from "./components/MyProfile";
import Forum from "./components/Forum";
import News from "./components/pages/News";
import CommunityBoard from "./components/pages/CommunityBoard";
// import Test from "./components/test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundTexture from "./components/ui/BackgroundTexture"
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BackgroundTexture>

      <Router>
        <Header />
        <Routes>

          {/* <Route path="/test" element={<Test />}></Route> */}


          <Route path="/" element={<IntroSplashPage />}></Route>
          <Route path="/home" element={<IntroSplashPage />}></Route>
          <Route path="/board" element={<CommunityBoard />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/signup" element={<SignUpForm />}></Route> */}


        </Routes>
        <br />
        <br />
        <Footer />
      </Router>

    </BackgroundTexture>

  );
}

export default App;
