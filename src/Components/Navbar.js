import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setisLoggedIn = props.setisLoggedIn;

  return (
    <div className="flex justify-evenly ">
      <Link to="/">
        {" "}
        <img
          src={Logo}
          alt="logo"
          width={300}
          height={32}
          loading="lazy"
        />{" "}
      </Link>
      <nav>
        <ul className="flex gap-5">
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

      <div className="flex ml-5 gap-6">
        {!isLoggedIn && (
          <Link to="./login">
            <button >Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="./signup">
            <button >Signup</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setisLoggedIn(false);
                toast.success("Logged Out", {
                  autoClose: 2000,
                });
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="./dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
