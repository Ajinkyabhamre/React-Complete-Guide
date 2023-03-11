import "./App.css";
import React, { useState } from "react";

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202124";
      // document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
    }
  };

  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyse"
          mode={mode}
          togglemode={togglemode}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
