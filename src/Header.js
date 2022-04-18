import React from "react";
import "./Header.css";

import Customlink from "./Customelink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Creative Writer
          </a>

          <div className="" id="navbarNavAltMarkup">
            <div className="navbar-nav all-nav">
              <Customlink className="text-white" to="/">
                Home
              </Customlink>
              <Customlink className="text-white" to="/service">
                Services
              </Customlink>
              <Customlink className="text-white" to="/blog">
                Blogs
              </Customlink>
              <Customlink className="text-white" to="/about">
                About
              </Customlink>

              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-danger btn-sm ms-2 "
                >
                  Sign out
                </button>
              ) : (
                <Customlink to="/login">Login</Customlink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
