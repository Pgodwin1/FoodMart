import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RegisterUser from "./pages/RegisterUser";
import RegisterVendor from "./pages/RegisterVendor";
import Login from "./pages/Login";

import VerifyEmail from "./pages/VerifyEmail";
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
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/vendor" element={<RegisterVendor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify_email" element={<VerifyEmail />} />
      </Routes>
    </>
  );
}

export default App;
