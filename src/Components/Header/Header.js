import React from "react";
import TrollFace from "../../Assets/images/troll-face.png";
import "./Header.css";
export default function Header() {
    return (
        <div className="header">
            <div className="leftPart">
                <img src={TrollFace} alt="logo" width={50}/>
                <h1>Meme Generator</h1>
            </div>
            <div className="rightPart">
                <h4>React Course - Project 3</h4>
            </div>
        </div>
    );

}