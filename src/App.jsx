
// APP CSS
import "./components/css/App.css";

// SITE COMPONENTS

// PAGES
import Login from "./components/pages/Login";
import News from "./components/pages/News";
import CommunityBoard from "./components/pages/CommunityBoard";
import Forum from "./components/Forum";
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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
