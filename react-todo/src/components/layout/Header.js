import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={linkStyle}>
                Home
            </Link>{" "}
            |{" "}
            <Link to="/about" style={linkStyle}>
                About
            </Link>
        </header>
    );
}

const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
};
const linkStyle = {
    color: "#fff",
    margin: "2px 5px",
    textDecoration: "none",
};
export default Header;
