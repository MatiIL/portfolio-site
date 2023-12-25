import React, { useEffect, useState } from "react";
import { useAnimateContext } from "../../context/AnimationContext";
import Introduction from "./intro/Introduction";
import { TypeAnimation } from "react-type-animation";
import "./HeroSection.css";

const MainFrame = () => {
  const { fileName, setFileName, headerVisibility, setHeaderVisibility } =
    useAnimateContext();
  const [macVisibility, setMacVisibility] = useState(true);

  const handleClick = () => {
    setHeaderVisibility(true);
    setMacVisibility(false);
  };

  useEffect(() => {
    if (headerVisibility) {
      setTimeout(() => {
        setMacVisibility(false);
      }, 2000);
    }
  }, [headerVisibility]);

  const codeStatements = [
    `Welcome to my portfolio site!
    Are you ready for some coding?`,
    2000,
    () => setFileName("AnimationContext"),
    `const AnimationContextProvier = ({ children }) => {
      const [headerVisibility, setHeaderVisibility] = useState(false);\n
      return (
        <AnimationContext.Provider
         value={{
          headerVisibility,
          setHeaderVisibility,
       }}
      >
      {children}
      </AnimationContext.Provider>
      )
    }`,
    1000,
    () => setFileName("MainFrame.jsx"),
    `import { useAnimateContext } from "../context/AnimationContext";\n
    const { setHeaderVisibility } = useAnimateContext();
    setHeaderVisibility(true);\n
    That's it for now, see you soon!`,
    500,
    () => setHeaderVisibility(true),
  ];

  return (
    <div id="hero">
      {macVisibility ? (
        <>
          <div className="mac">
            <div className="sublime">
              <center>{fileName}</center>
            </div>
            <code>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  height: "195px",
                  width: "300px",
                  display: "inline-block",
                  textAlign: "start",
                }}
                sequence={codeStatements}
                speed={80}
                deletionSpeed={100}
                repeat={0}
              />
            </code>
          </div>

          <div className="stand"></div>
          <div
            onClick={handleClick}
            className="skip text-light mt-3 text-decoration-underline"
          >
            skip intro
          </div>
        </>
      ) : (
        <Introduction />
      )}
    </div>
  );
};

export default MainFrame;
