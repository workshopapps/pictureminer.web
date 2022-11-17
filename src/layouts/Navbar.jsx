import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/ui/Logo";
import UserContext from "../context/UserProvider";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = function (e) {
    e.target.closest(
      ".menu"
    ).previousElementSibling.dataset.visible = `${openMenu}`;
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="navigation">
      <div className="inner_navigation container" data-visible={openMenu}>
        <div className="navigation-logo">
          <Logo color={" #125641"} />
        </div>

        <nav>
          <NavLink
            to={""}
            className={({ isActive }) => (isActive ? "active_link" : "")}
            style={{ pointerEvents: "none", color: "#ccc" }}
          >
            How it Works
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? "active_link" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active_link" : "")}
          >
            Contact Us
          </NavLink>
          {user.name ? (
            <NavLink className={"button"} to="/dashboard">
              My Dashboard
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "active_link login" : "login"
              }
            >
              Log In
            </NavLink>
          )}

          {user.name ? (
            <NavLink
              to="/"
              onClick={() => {
                window.sessionStorage.clear();
                setUser({});
              }}
            >
              Sign Out
            </NavLink>
          ) : (
            <NavLink className={"register button"} to="/signup">
              Register
            </NavLink>
          )}
        </nav>
      </div>
      <div
        className={openMenu ? "menu menu-open" : "menu"}
        onClick={handleClick}
      >
        <div className="first"></div>
        <div className="middle"></div>
        <div className="last"></div>
      </div>
      <div className="mobile-navigation-logo">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
