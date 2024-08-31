import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { cssTransition, Slide, toast } from "react-toastify";

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
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="text"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={chnageHandler}
          name="email"
          className="text-black"
        ></input>
      </label>
      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={formData.password}
          onChange={chnageHandler}
          name="password"
          className="text-black"
        ></input>

        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button type="submit">SignIn</button>
    </form>
  );
};

export default LoginForm;
