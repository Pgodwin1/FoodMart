import { Link } from "react-router-dom";
import Input from "./common/input";

interface Props {
  onChange: (text: HTMLInputElement) => void;
}

const LoginComponent = ({ onChange }: Props) => {
  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto bg-white">
        <div className=" w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className=" py-16 px-12  ">
            <h1 className="text-3xl mb-4 text-center text-green-500">Login</h1>
            <form>
              <Input
                placeHolder="Enter Email"
                type="email"
                onChange={onChange}
                label="Email"
                name="email"
              />
              <Input
                placeHolder="Enter password"
                type="password"
                onChange={onChange}
                label="Password"
                name="password"
              />

              <div className="mt-5">
                <button className="w-full bg-green-500 py-3 text-center text-white rounded-lg">
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-evenly">
             
              <p>
                {" "}
                Don't have an account ?{" "}
                <Link
                  to="/register/user"
                  className="text-green-600 visited:text-purple-600 hover:underline"
                >
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
