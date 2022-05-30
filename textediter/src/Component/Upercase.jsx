import React, { useState } from "react";
import copy from "copy-to-clipboard";

const Upercase = (props) => {
  const handleClick = () => {
    const newText = text.toUpperCase();
    console.log("handle click works");
    setText(newText);
    props.showAlert("Text Is Uppercase", "success");
  };

  const lowerClick = () => {
    const LowercaseText = text.toLowerCase();
    setText(LowercaseText);
    props.showAlert("Text Is Lowercase", "warning");
  };

  //onchange Event
  const handleChange = (event) => {
    console.log("handle change works");

    setText(event.target.value);
  };

  // copy to clipboard

  const copyHandler = () => {
    copy(text);
    props.showAlert("Text Is Copy To clipboard", "success");
  };

  //clear
  const clearHandler = () => {
    const clearText = "";
    setText(clearText);
    props.showAlert("Text is clear", "success");
  };

  function wordcounter(text) {
    let wordNumber = text.split(" ").filter(function (n) {
      return n !== "";
    }).length;
    return wordNumber;
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container mx-auto">
        <h1
          className={`text-3xl m-2 
          text-${props.mode === "light" ? "slate-900" : "slate-400"} my-4 `}
        >
          Paste Your Text here{" "}
        </h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows={8}
          />
          <button className="btn btn-primary mt-3 " onClick={handleClick}>
            Click for Uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-2 " onClick={lowerClick}>
            Click for Lowercase
          </button>
          <button className="btn btn-primary mt-3 mx-2 " onClick={copyHandler}>
            Copy To Clipboard
          </button>
          <button className="btn btn-primary mt-3 mx-2 " onClick={clearHandler}>
            Clear
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-2 mb-8">
        <h2
          className={`text-3xl mt-2 text-${
            props.mode === "light" ? "slate-900" : "slate-400"
          }`}
        >
          Text Summary
        </h2>
        <button
          className={`mx-2 btn btn-outline border my-2 text-${
            props.mode === "light" ? "slate-900" : "slate-400"
          }`}
        >
          {wordcounter(text)} : Words
        </button>
        <button
          className={`mx-2 btn btn-outline border my-2 text-${
            props.mode === "light"
              ? "slate-900"
              : props.mode === "red"
              ? "blue-700"
              : "slate-400"
          }`}
        >
          {text.length} : Characters
        </button>
        <button
          className={`mx-2 btn btn-outline border my-2 text-${
            props.mode === "light" ? "slate-900" : "slate-400"
          }`}
        >
          {0.008 * text.trim().split("").length} : Minutes To Read
        </button>
      </div>
    </>
  );
};

export default Upercase;
