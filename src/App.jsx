import {Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/home";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>

    </>
  );
}

export default App;
