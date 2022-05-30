import React, { useState } from "react";
import Alert from "./Component/Alert";
// import About from "./Component/About";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Upercase from "./Component/Upercase";

const App = () => {
  const [mode, setMode] = useState("light");
  const [btntext, setBtntext] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const colorChange = () => {
    let colour = document.getElementById("colorpicker").value;
    document.body.style.backgroundColor = colour;
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("blue");
      document.body.style.backgroundColor = "#000000";
      setBtntext("Enable Light Mode");
      showAlert("Dark Mode Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtntext("Enable dark Mode");
      showAlert("Light Mode Enable", "success");
    }
  };

  const showAlert = (massaage, type) => {
    setAlert({
      msg: massaage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div>
      <Navbar
        mode={mode}
        colorChange={colorChange}
        toggle={toggle}
        btntext={btntext}
      />
      <Alert alert={alert} showAlert={showAlert} mode={mode} />
      <div className="continer">
        <Upercase alert={alert} showAlert={showAlert} />
      </div>
      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default App;
