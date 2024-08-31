import React, {  useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SignupForm = ({setIsLoggedIn, setUserFirstName }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  });

 

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();


  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password !== formData.confirmPassowrd){
        toast.error("Password do not match");
        return;
    }
    setIsLoggedIn(true);
    toast.success("Accout created");
    // console.log(formData.firstName)
    setUserFirstName(formData.firstName);
    navigate("./dashboard");
  }


  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            First name <sup>*</sup>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              className="text-black"
            ></input>
          </label>
          <label>
            Last name <sup>*</sup>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              className="text-black"
            ></input>
          </label>
        </div>

        <label>
          Enter email <sup>*</sup>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email"
            value={formData.email}
            className="text-black"
          ></input>
        </label>

        <label>
          <p>
            Create password
            <sup>*</sup>
          </p>

          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={changeHandler}
            placeholder="Enter password"
            value={formData.password}
            className="text-black"
          ></input>

          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label>
          <p>
            Create Confirm password
            <sup>*</sup>
          </p>

          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassowrd"
            onChange={changeHandler}
            placeholder="Enter confirm password"
            value={formData.confirmPassowrd}
            className="text-black"
          ></input>

          <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button>Create account</button>
      </form>
    </div>
  );
};

export default SignupForm;
