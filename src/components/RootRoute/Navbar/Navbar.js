// React Module
import React from "react";

// Component Module
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <Searchbar />
        </div>
    )
}

export default Navbar;