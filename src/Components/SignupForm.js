import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

const SignupForm = ({ setIsLoggedIn, setUserFirstName }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassowrd) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Accout created", {
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
    const accountData = {
      ...formData
    }

    const finalData = {
      ...accountData,
      accountType
    }
    console.log(finalData)
    setUserFirstName(formData.firstName);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-[#161D29]  gap-x-2 text-[1.025rem] px-1 py-1  my-6 rounded-full max-w-max ">
        <button
          className={`${
            accountType === "student"
              ? " bg-[#000814] text-[#F1F2FF]"
              : "bg-transparent text-[#999DAA]"
          }
          rounded-full py-3 px-5 transition-all duration-200  `}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? " bg-[#000814] text-[#F1F2FF]"
              : "bg-transparent text-[#999DAA]"
          }
          rounded-full py-3 px-5 transition-all duration-200  `}
        >
          Instructor
        </button>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6 "
      >
        <div className="w-full flex mx-auto gap-x-5">
          {/* first name */}

          <label className="text-[#F1F2FF] text-[1.1rem] mb-1">
            First name <sup className="text-red-500">*</sup>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              className="text-[#F1F2FF] bg-[#161D29] rounded-[0.5rem] w-full p-[12px] shadow-sm shadow-slate-400  border-1 focus:border-[#67c6e6] focus:outline-none focus:ring-2 placeholder:text-sm"
            ></input>
          </label>

          {/* last name */}
          <label className="text-[#F1F2FF] text-[1.1rem] mb-1">
            Last name <sup className="text-red-500">*</sup>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              className="text-[#F1F2FF] bg-[#161D29] rounded-[0.5rem] w-full p-[12px] shadow-sm shadow-slate-400  border-1 focus:border-[#67c6e6] focus:outline-none focus:ring-2 placeholder:text-sm"
            ></input>
          </label>
        </div>

        {/* email */}

        <label>
          Enter email <sup className="text-red-500">*</sup>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email"
            value={formData.email}
            className="text-[#F1F2FF] bg-[#161D29] rounded-[0.5rem] w-full p-[12px] shadow-sm shadow-slate-400  border-1 focus:border-[#67c6e6] focus:outline-none focus:ring-2 placeholder:text-sm"
          ></input>
        </label>

        <div className="flex gap-x-5 mx-auto">
          {/* create password */}

          <label className="relative">
            <p className="text-[#F1F2FF] text-[1.1rem] mb-1">
              Create password
              <sup className="text-red-500"> *</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formData.password}
              className="text-[#F1F2FF] bg-[#161D29] rounded-[0.5rem] w-full p-[12px] shadow-sm shadow-slate-400  border-1 focus:border-[#67c6e6] focus:outline-none focus:ring-2 placeholder:text-sm"
            ></input>

            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[45px]  cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#F1F2FF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#F1F2FF" />
              )}
            </span>
          </label>

          {/* create confirm password */}
          <label className="relative">
            <p className="text-[#F1F2FF] text-[1.1rem] mb-1">
              Create Confirm password
              <sup className="text-red-500"> *</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassowrd"
              onChange={changeHandler}
              placeholder="Enter confirm password"
              value={formData.confirmPassowrd}
              className="text-[#F1F2FF] bg-[#161D29] rounded-[0.5rem] w-full p-[12px] shadow-sm shadow-slate-400  border-1 focus:border-[#67c6e6] focus:outline-none focus:ring-2  placeholder:text-sm"
            ></input>

            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[45px]  cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#F1F2FF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#F1F2FF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-[#FFD60A] rounded-[8px] font-medium text-[#000814] px-[12px] py-[8px] mt-7">
          Create account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
