import { useLocation } from "react-router-dom";
const VerifyEmail = () => {
  const location = useLocation();

  console.log(location.state);
  return <div className="container mx-auto">hello</div>;
};

export default VerifyEmail;
