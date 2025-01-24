
// APP CSS
import "./components/css/App.css";

// LIBS
import { cld } from "../server/scripts/imageRepository";

// CLOUDINARY
import { AdvancedImage } from '@cloudinary/react';
import { useState, useEffect } from "react";

// CONTEXT
import { NotificationToast } from "./components/ui/NotificationToast";
import { ConfirmationModal } from "./components/ui/ConfirmationModal";

// PAGES
import Login from "./components/pages/Login";
import News from "./components/pages/News";
import CommunityBoard from "./components/pages/CommunityBoard";
import Forum from "./components/Forum";
import PageNotFound from "./components/pages/PageNotFound";
// ! change to home
import IntroSplashPage from "./components/IntroSplashPage";
import Dashboard from "./components/pages/Dashboard";
import ArticleEdit from "./components/ui/ArticleEdit"

import SignUpForm from "./components/SignUpForm";
import NewsArticlePage from "./components/NewsArticlePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/ui/Footer";

function App() {

  return (

    <NotificationToast>


      < Router >
        < Header />
        <Routes>

          <Route path="/" element={<IntroSplashPage />}></Route>
          <Route path="/home" element={<IntroSplashPage />}></Route>
          <Route path="/board" element={<CommunityBoard />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/article/:id" element={<NewsArticlePage />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/edit/article/:id" element={
            <ConfirmationModal>

              <ArticleEdit />
            </ConfirmationModal>

          }></Route>
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
        <Footer />
      </Router >

    </NotificationToast>
  );
}

export default App;
