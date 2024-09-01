import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

const LoginForm = ({ setIsLoggedIn, setUserFirstName }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function chnageHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const name = extractNameFromEmail(formData.email);

  function extractNameFromEmail(email) {
    // Split the email at '@' and get the first part
    const namePart = email.split("@")[0];
    // Capitalize the first letter and make the rest lowercase
    const formattedName =
      namePart.charAt(0).toUpperCase() + namePart.slice(1).toLowerCase();
    return formattedName;
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    setUserFirstName(name);
    toast.success("Logged In", {
      position: "top-center",
      autoClose: 1000,
      pauseOnHover: true,
      transition: Slide,
      style: {
        width: "50%",
        height: "10px",
        lineHeight: "10px",
        fontSize: "12px",
        borderRadius: "15px",
        textAlign: "center",
      },
    });
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
  
      {/* Username or email  */}
      <label className="w-full">
        <p className="text-[#F1F2FF] text-[1.1rem] mb-1">
          Email Address <sup className="text-red-500 ">*</sup>
        </p>
        <input
          required
          type="text"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={chnageHandler}
          name="email"
          className="text-[#F1F2FF] bg-[#161D29] rounded-[0.5rem] w-full p-[12px] shadow-sm shadow-slate-400  border-1 focus:border-[#67c6e6] focus:outline-none focus:ring-2 placeholder:text-sm"
        ></input>
      </label>

      {/* password */}
      <label className="w-full relative">
        <p className="text-[#F1F2FF] text-[1.1rem] mb-1">
          Password<sup className="text-red-500 ">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={formData.password}
          onChange={chnageHandler}
          name="password"
          className="text-[#F1F2FF] bg-[#161D29] rounded-[0.5rem] w-full p-[12px] shadow-sm shadow-slate-400 border-1 focus:border-[#67c6e6] focus:outline-none focus:ring-2 placeholder:text-sm"
        />

        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[42px]  cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#F1F2FF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#F1F2FF" />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-[#47A5C5] max-w-max ml-auto ">
            Forgot Password
          </p>
        </Link>
      </label>

      <button
        type="submit"
        className="bg-[#FFD60A] rounded-[8px] font-medium text-[#000814] px-[12px] py-[8px] mt-7"
      >
        SignIn
      </button>
    </form>
  );
};

export default LoginForm;
