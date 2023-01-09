import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const navigate = useNavigate();
  const [navBarActive, setNavBarActive] = useState(false);
  return (
    <div
      className="headerMain"
      style={navBarActive ? { height: "fit-content" } : { height: "5rem" }}
    >
      <img
        src="assets/images/logo/logo.png"
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          navigate("/");
        }}
        alt=""
      />
      <a href="/" id="home" className="nav">
        Home
      </a>
      <a className="nav service" style={{ position: "relative" }}>
        Services
        <div
          className="serviceDropDown"
          style={{ backgroundColor: "white", width: "12rem" }}
        >
          <div>
            <p
              style={{ padding: "1rem" }}
              onClick={() => navigate("/houseKeeping")}
            >
              House Keeping
            </p>{" "}
          </div>
          <div>
            <p
              style={{ padding: "1rem" }}
              onClick={() => navigate("/securityGuards")}
            >
              Security Guards
            </p>{" "}
          </div>
        </div>
      </a>
      <a onClick={() => navigate("/clients")} className="nav clients">
        Clients
      </a>
      <a onClick={() => navigate("/gallery")} className="nav">
        Gallery
      </a>
      <a onClick={() => navigate("/about")} className="nav">
        About
      </a>
      <a onClick={() => navigate("/contact")} className="nav">
        Contact Us
      </a>
      <span
        onClick={() => setNavBarActive(!navBarActive)}
        className="hamburger"
      >
        <MenuIcon></MenuIcon>
      </span>
    </div>
  );
}

export default Header;
