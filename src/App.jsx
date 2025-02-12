
// APP CSS
import "./components/css/App.css";

// CONTEXT
import { NotificationToast } from "./components/context/NotificationToast";
import { ConfirmationModal } from "./components/context/ConfirmationModal";

// PAGES
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import News from "./components/pages/News";
import CommunityBoard from "./components/pages/CommunityBoard";
import Forum from "./components/Forum";
import PageNotFound from "./components/pages/PageNotFound";
import About from "./components/pages/About";


// WIP
// import SignUpForm from "./components/SignUpForm";

import ProtectedRoutes from "./utils/ProtectedRoutes";
import Dashboard from "./components/pages/Dashboard";
import ArticleEdit from "./components/ui/ArticleEdit"

import NewsArticlePage from "./components/NewsArticlePage";
import PostPage from "./components/PostPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import PostEdit from "./components/ui/PostEdit";

function App() {

  return (

    <NotificationToast>
      < Router >
        < Header />
        <Routes>

          {/* wip */}
          {/* ************************************************* */}
          {/* <Route path="/sign-up" element={<SignUpForm />}></Route> */}
          {/* ************************************************* */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/board" element={<CommunityBoard />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<NewsArticlePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit/article/:id" element={<ConfirmationModal><ArticleEdit /></ConfirmationModal>} />
            <Route path="/edit/post/:id" element={<ConfirmationModal><PostEdit /></ConfirmationModal>} />
          </Route>


          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router >

    </NotificationToast >
  );
}

export default App;
