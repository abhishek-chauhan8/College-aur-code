import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  let userFirstName = props.userFirstName;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1360px] py-2 mx-auto   ">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          width={280}
          height={32}
          loading="lazy"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-10   text-xl text-white ">
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About</NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex gap-x-6   ">
        {!isLoggedIn && (
          <Link to="./login">
            <button className="bg-[#161D29] border border-[#2C333F] rounded-[8px]  px-[12px] py-[8px] text-[#AFB2BF]">Log in</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="./signup">
            <button className="bg-[#161D29] border border-[#2C333F] rounded-[8px]  px-[12px] py-[8px] text-[#AFB2BF]">Sign Up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out", {
                  position: "top-center",
                  autoClose: 1000,
                  pauseOnHover: true,
                  transition: Slide,
                  style: {
                    width: "50%",
                    height : "10px",
                    lineHeight : "10px",
                    fontSize: "12px",
                    borderRadius : "15px",
                    textAlign : "center"
                  },
                });
              }}
              className="bg-[#161D29] border border-[#2C333F] rounded-[8px]  px-[12px] py-[8px] text-[#AFB2BF]"
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="./dashboard">
            <button className="bg-[#5b5c5e] border border-[#2C333F] rounded-[8px]  px-[12px] py-[8px] text-white" >Welcome {userFirstName} </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
