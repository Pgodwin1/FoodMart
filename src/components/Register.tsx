import { useForm } from "react-hook-form";
import Input from "../components/common/input";
import { Link } from "react-router-dom";

interface Props {
  onChange: (text: HTMLInputElement) => void;
  register: string;
  login: string;
  role: string;
  handleSubmit: () => void;
}
const RegisterComponent = ({
  onChange,
  register,
  login,
  role,
  handleSubmit,
}: Props) => {
  const form = useForm();

  console.log(form);

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto bg-white">
        <div className=" w-6/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className=" py-16 px-12  ">
            <h1 className="text-3xl mb-4 text-center text-[#56ba2e]">
              Register
            </h1>
            <form onSubmit={handleSubmit}>
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
              <Input
                placeHolder="Enter Confirm_Password"
                type="password"
                onChange={onChange}
                label="Confirm_Password"
                name="Confirm_Password"
              />
              <div className="mt-5">
                <input type="checkbox" className="border border-green-300" />
                <span>
                  {" "}
                  I accept the{" "}
                  <a href="#" className="text-green-500 font-semibold">
                    {" "}
                    Terms of use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-green-500 font-semibold">
                    {" "}
                    Privacy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-green-500 py-3 text-center text-white rounded-lg"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-evenly">
              <p>
                {" "}
                <Link
                  to={register}
                  className="text-green-600 visited:text-grey-600 hover:underline"
                >
                  register as {role}
                </Link>{" "}
              </p>
              <p>
                {" "}
                Already have an account ?{" "}
                <Link
                  to={login}
                  className="text-green-600 visited:text-purple-600 hover:underline"
                >
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
