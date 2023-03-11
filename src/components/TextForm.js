import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnchange = (event) => {
    // console.log("Onchange handle");
    setText(event.target.value);
  };
  const handleUpclick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared", "primary");
  };
  const handleLoclick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleCopyclick = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied", "dark");
  };
  const removeSpacesclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces are removed", "info");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container-sm"
        //first {} is for JS & inside {{Object}} curly bracket is for object
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnchange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#2B3035" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-1"
              : "btn btn-secondary mx-1"
          } mb-3`}
          onClick={handleUpclick}
        >
          Convert to UpperCase
        </button>
        <button
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-1"
              : "btn btn-secondary mx-1"
          } mb-3`}
          onClick={handleLoclick}
        >
          Convert to LowerCase
        </button>
        <button
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-1"
              : "btn btn-secondary mx-1"
          } mb-3`}
          onClick={handleClearclick}
        >
          Clear text
        </button>
        <button
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-1"
              : "btn btn-secondary mx-1"
          } mb-3`}
          onClick={handleCopyclick}
        >
          Copy text
        </button>
        <button
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-1"
              : "btn btn-secondary mx-1"
          } mb-3`}
          onClick={removeSpacesclick}
        >
          Remove spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text-summary</h3>
        <p>
          <b>
            {text.split(" ").length} words and {text.length} characters
          </b>
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview here..."}</p>
      </div>
    </>
  );
}
