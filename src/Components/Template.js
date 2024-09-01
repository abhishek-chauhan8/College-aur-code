import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.js";
import LoginForm from "../Components/LoginForm.js";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn , setUserFirstName}) => {
  return (
    <div className="flex w-11/12 max-w-[1360px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">

      <div className="w-11/12 max-w-[550px] mx-0 text-white mt-5">
        <h1 className="text-[#F1F2FF] font-semibold text-[2rem] leading-[2.675rem] first-letter:text-[3.5rem] first-letter:font-semibold mb-3">{title}</h1>
        <p className="text-[1.2rem] mt-2 leading-[1.7rem]">
          <span className="text-[#AFB2BF]">{desc1}</span>
          <br/>
          <span className="text-[#47A5C5] italic">{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} setUserFirstName={setUserFirstName} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} setUserFirstName={setUserFirstName}/>}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-[#2C333F]"></div>
          <p className="text-[#2C333F] font-bold leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-[#2C333F]"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-[#AFB2BF] border-[#2C333F] border px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 mt-16 max-w-[450px]">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className=" rounded-md"

        />
        <img
          src={image}
          alt="students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 border rounded-md"
        />
      </div>
    </div>
  );
};

export default Template;