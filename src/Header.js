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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Creative Writer
          </a>

          <div className="" id="navbarNavAltMarkup">
            <div className="navbar-nav all-nav">
              <Customlink to="/">Home</Customlink>
              <Customlink to="/blog">Blogs</Customlink>
              <Customlink to="/about">About</Customlink>

              {user ? (
                <button onClick={handleSignOut}>Sign out</button>
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
