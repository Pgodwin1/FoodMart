// import React from "react";
import { useForm } from "react-hook-form";
// import Input from "../components/common/input";
// import { Link, useNavigate } from "react-router-dom";
import RegisterComponent from "../components/Register";

const Register = () => {
  const form = useForm();
  const onChange = (target: HTMLInputElement) => {
    console.log(target);
  };
  const handleSubmit = () => {};
  //   const navigate = useNavigate();
  console.log(form);
  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log("hello");
  //     navigate("/verify_email", { state: "frank@gmail.com" });
  //   };
  return (
    <RegisterComponent
      role="user"
      register="/register/user"
      login="/login"
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;
