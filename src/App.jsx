import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SubPage from "./pages/SubPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-civinity-ink">
        {/* 1. Navbar */}
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<SubPage section="news" />} />
            <Route
              path="/report-problem"
              element={<SubPage section="report-problem" />}
            />
            <Route
              path="/creativity"
              element={<SubPage section="creativity" />}
            />
            <Route
              path="/institutions"
              element={<SubPage section="institutions" />}
            />
            <Route path="/quiz" element={<SubPage section="quiz" />} />
            <Route path="/login" element={<SubPage section="login" />} />
            <Route path="/register" element={<SubPage section="register" />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* 11. Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
