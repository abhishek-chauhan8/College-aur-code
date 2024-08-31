import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../Components/Template";

function Signup({ setIsLoggedIn , setUserFirstName}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      setUserFirstName={setUserFirstName}
    />
  );
}

export default Signup;
