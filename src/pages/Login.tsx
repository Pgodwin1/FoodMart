//import { useForm } from "react-hook-form";
// import Input from "../components/common/input";
// import { Link } from "react-router-dom";
import LoginComponent from "../components/Login";
const Login = () => {
  // const form = useForm();
  const onChange = (target: HTMLInputElement) => {
    console.log(target);
  };

  return <LoginComponent onChange={onChange} />
  
};

export default Login;
