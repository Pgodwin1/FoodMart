import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RegisterUser from "./pages/RegisterUser";
import RegisterVendor from "./pages/RegisterVendor";
import Login from "./pages/Login";

import VerifyEmail from "./pages/VerifyEmail";

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
