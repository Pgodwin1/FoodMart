import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { About } from "./components/Navbar/nav/About";
import { Bestsales } from "./components/Navbar/nav/Bestsales";
import Contact from "./components/Navbar/nav/contact";
import Blogs from "./components/Navbar/nav/Blogs";
import Promotion from "./components/Navbar/nav/Promotion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/best-sales" element={<Bestsales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/promotions" element={<Promotion />} />
      </Routes>
    </>
  );
}

export default App;
