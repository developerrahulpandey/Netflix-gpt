import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [toggleSignInFormVariable, setToggleSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setToggleSignInForm(!toggleSignInFormVariable);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="background_logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {toggleSignInFormVariable ? "Sign In" : "Sign Up"}
        </h1>
        {!toggleSignInFormVariable && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email A ddress"
          className="p-2 my-4 w-full bg-gray-700 "
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg ">
          {toggleSignInFormVariable ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {toggleSignInFormVariable
            ? " New to Netflix ? Sign Up Now"
            : "Already registered member ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
