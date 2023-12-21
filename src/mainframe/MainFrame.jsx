import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { statementStrings } from "./statementStrings";
import "./MainFrame.css";

const MainFrame = () => {
  return (
    <>
      <div className="mac mt-5">
        <div className="sublime">
          <center>MainFrame.jsx</center>
        </div>
        <code>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              width: "200px",
              display: "inline-block",
              textAlign: "justify",
            }}
            sequence={[statementStrings, 1000]}
            repeat={0}
          />
        </code>
      </div>

      <div className="stand"></div>
    </>
  );
};

export default MainFrame;