import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

function SignIn(props) {
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        console.log("Logged In");
        toast.success("Logged In");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Error");
        console.log(err.message);
      });
  };

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (e) => {
    // if (values.email && values.pass)
    if (!(values.email.trim() && values.pass.trim())) {
      toast.error("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        toast.success("Logged In");
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // alert(err.message);
        toast.error("Invalid Credentials");
      });
  };

  const handlereset = () => {
    navigate("/reset");
  };
  return (
    <div className="h-screen w-full bg-dark-gray flex items-center justify-center">
      <div className="text-white text-center">
        <div>
          <svg
            className="h-[40px] mx-auto mb-4"
            viewBox="0 0 167.5 167.5"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
            aria-labelledby="spotify-white-title"
          >
            <title id="spotify-white-title">Spotify</title>
            <path
              fill="#FFFFFF"
              d="M83.75,0C37.52,0,0,37.52,0,83.75c0,46.24,37.52,83.75,83.75,83.75c46.24,0,83.75-37.52,83.75-83.75C167.5,37.52,130,0,83.75,0z M120.6,120.27c-1.86,2.7-5.48,3.45-8.18,1.59c-22.39-15.44-50.56-18.91-83.66-11.05c-3.18,0.74-6.24-1.3-6.98-4.48c-0.74-3.18,1.3-6.24,4.48-6.98c35.36-8.26,66.61-4.33,91.61,12.45C121.34,113.83,122.18,117.56,120.6,120.27z M132.29,93.86c-2.32,3.35-6.91,4.24-10.26,1.91c-25.62-17.8-64.74-22.98-94.92-13.43c-3.72,1.16-7.65-0.98-8.82-4.7c-1.16-3.72,0.98-7.65,4.7-8.82c34.58-10.71,76.99-5.01,105.62,15.07C133.19,85.23,134.61,90.51,132.29,93.86z M135.95,68.18c-0.98,0-2.01-0.24-2.97-0.76c-30.58-17.05-82.12-18.52-111.02-10.84c-3.34,0.91-6.81-0.97-7.72-4.31c-0.91-3.34,0.97-6.81,4.31-7.72c32.68-8.86,87.08-7.11,121.5,12.06c3.08,1.72,4.14,5.55,2.42,8.64C140.07,67.02,138.04,68.18,135.95,68.18z"
            ></path>
          </svg>
        </div>
        <div className="font-bold text-5xl mb-6 w-full flex items-center justify-center">
          <div className="max-w-[400px]">Login to Spotify</div>
        </div>

        <div class="mt-12 space-y-5">
          <button
          onClick={handleGoogle}
            type="button"
            class="relative inline-flex w-full items-center justify-center border border-gray-400 bg-transparent px-3.5 py-2.5 font-semibold text-white rounded-full transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span class="mr-2 inline-block">
              <svg
                class="h-6 w-6 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </span>
            Continue with Google
          </button>
        </div>

        <hr className="h-[0.4px] border-b border-light-gray mt-10 mb-4" />
        <form>
          <div className="flex flex-col text-start">
            <label for="email" className="font-bold mb-2">
              Email Address
            </label>
            <input
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              type="email"
              name="inputEmail"
              id="inputEmail"
              className="bg-transparent border-2 border-light-gray p-2 rounded-md mb-3"
              placeholder="name@example.com"
            />
            <label for="pass" className="font-bold mb-2">
              Password
            </label>
            <input
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  pass: event.target.value,
                }))
              }
              type="password"
              name="inputPass"
              id="inputPass"
              className="bg-transparent border-2 border-light-gray p-2 rounded-md"
              placeholder="************"
            />
          </div>
          <div>
            <button
              disabled={submitButtonDisabled}
              type="button"
              onClick={handleSubmission}
              className="mt-10 bg-green-500 text-black font-bold text-[16px] p-2 rounded-full w-[90%]"
            >
              Login
            </button>
          </div>
          <div className="mt-5 mb-8">
            <a href="#" className="underline underline-offset-2">
              Forgot Password ?
            </a>
          </div>
        </form>

        <hr className="h-[0.4px] border-b border-light-gray mt-10 mb-4" />

        <div className="text-sm">
          Don't have an account?
          <NavLink to="/signup">
            <a href="#" className="underline underline-offset-1">
              {" "}
              SignUp here.
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
