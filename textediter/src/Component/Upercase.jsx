import React, { useState } from "react";
import copy from "copy-to-clipboard";

const Upercase = () => {
  const handleClick = () => {
    const newText = text.toUpperCase();
    console.log("handle click works");
    setText(newText);
  };

  const lowerClick = () => {
    const LowercaseText = text.toLowerCase();
    setText(LowercaseText);
  };

  //onchange Event
  const handleChange = (event) => {
    console.log("handle change works");

    setText(event.target.value);
  };

  // copy to clipboard

  const copyHandler = () => {
    copy(text);
    alert(`You have copied "${text}"`);
  };

  //clear
  const clearHandler = () => {
    const clearText = "";
    setText(clearText);
  };

  // captilize text

  const capitalizeHandlebar = () => {
    let firstchar = text.split(" ").map((firstletter) => firstletter[0]); // storing the first char of the string
    console.log(firstchar);
    let captText = firstchar.toUpperCase(); // converting that to uppercase
    setText(captText + text.slice(1)); // printing it with rest excluding the first char by using slice

    console.log(setText(captText + text.slice(1)));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl m-2">Paste Your Text here </h1>
        <div className="mb-3">
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
          <button
            className="btn btn-primary mt-3 mx-2 "
            onClick={capitalizeHandlebar}
          >
            capitalize
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-2 mb-8">
        <h2 className="text-3xl mt-2 ">Text Summary</h2>
        <button className="mx-2 btn btn-outline border my-2">
          {text.split(" ").length} : Words
        </button>
        <button className=" btn  btn btn-outline border my-2">
          {text.length} : Characters
        </button>
        <button className=" btn  btn btn-outline border my-2">
          {0.008 * text.split("").length} : Minutes To Read
        </button>
      </div>
    </>
  );
};

export default Upercase;
