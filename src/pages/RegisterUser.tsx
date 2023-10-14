import { useForm } from "react-hook-form";
// import Input from "../components/common/input";
// import { Link } from "react-router-dom";
import RegisterComponent from "../components/Register";

const Register = () => {
  const form = useForm();
  const onChange = (target: HTMLInputElement) => {
    console.log(target);
  };
  const handleSubmit = () => {};
  console.log(form);
  return (
    <RegisterComponent
      role="vendor"
      register="/register/vendor"
      login="/login"
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;
