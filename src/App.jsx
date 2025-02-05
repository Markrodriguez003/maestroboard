
// APP CSS
import "./components/css/App.css";

// CONTEXT
import { NotificationToast } from "./components/context/NotificationToast";
import { ConfirmationModal } from "./components/context/ConfirmationModal";

// PAGES
import Login from "./components/pages/Login";
import News from "./components/pages/News";
import CommunityBoard from "./components/pages/CommunityBoard";
import Forum from "./components/Forum";
import PageNotFound from "./components/pages/PageNotFound";
import About from "./components/pages/About";


// ! change to home
import IntroSplashPage from "./components/IntroSplashPage";
import Dashboard from "./components/pages/Dashboard";
import ArticleEdit from "./components/ui/ArticleEdit"

import SignUpForm from "./components/SignUpForm";
import NewsArticlePage from "./components/NewsArticlePage";
import PostPage from "./components/PostPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
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
          <Route path="/about" element={<About />}></Route>
          <Route path="/article/:id" element={<NewsArticlePage />}></Route>
          <Route path="/post/:id" element={<PostPage />}></Route>
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
