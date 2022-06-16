import React from "react";
import Logo from "../../Images/troll-face.png";
import "../../App.css";

export default function Navbar() {
    return (
        <div>
            <header className="header">
                <span className="logo--container">
                    <img src={Logo} alt="" className="logo--image"/>
                    <h1> Meme generator </h1>
                </span>
                <p className="header--project">React course - Projects 3</p>
            </header>
        </div>
    )
}