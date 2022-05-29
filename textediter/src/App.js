import React from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Upercase from "./Component/Upercase";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="continer">
        {" "}
        <Upercase />
      </div>
      <Footer />
    </div>
  );
};

export default App;
