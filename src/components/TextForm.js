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
  };
  const [text, setText] = useState("");

  return (
    <div>
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
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
