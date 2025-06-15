import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogSection from "./pages/BlogSection";
import BlogDetail from "./pages/BlogDetail";
import Company from "./pages/Company";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminServices from "./admin/AdminServices";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company/:section" element={<Company/>} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin/services" element={<AdminServices />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
