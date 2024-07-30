import React from "react";
import "./Cover.css";
import coverImg from "../assets/cover-img.webp";

function Cover() {
    return (
        <>
            <div className="cover-main">
            <img className="cover-img" src={coverImg} alt="cover" />
            </div>
        </>
    );
}

export default Cover;