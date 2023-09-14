import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./Screen/MainPage";
import Community from "./Screen/Community";
import Footer from "./components/Footer";
import Login from "./components/Login";
import KakaoLogin from "./components/KakaoLogin";
import Join from "./components/join";
import GoogleLogin from "react-google-login";
import CommunityWritingPage from "./Screen/CommunityWritingPage";
import CommunityDetailPage from "./Screen/CommunityDetailPage";
import NationalSecurity from "./components/NationalSecurity";
import MyPage from "./components/MyPage";
import NationProvider from "./api/NationProvider";

function App() {
  return (
    <> 
    
      <BrowserRouter>
      <NationProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/NationalSecurity" element={<NationalSecurity />} />
          <Route path="/Community" element={<Community />} />
          <Route
            path="/CommunityWritingPage"
            element={<CommunityWritingPage />}
          />
          <Route
            path="/CommunityDetailPage"
            element={<CommunityDetailPage />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/GoogleLogin" element={<GoogleLogin />} />
          <Route path="/KakaoLogin" element={<KakaoLogin />} />
          <Route path="/join" element={<Join />} />
          <Route path="/myPage" element={<MyPage />}/>
        </Routes>
        <Footer />
      </NationProvider>
        
      </BrowserRouter>
    </>
  );
}

function ScrollToTop() {
  //페이지 이동 시 스크롤이 제일 위로 올라가도록
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default App;
