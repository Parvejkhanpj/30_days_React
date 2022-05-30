import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar bg-${props.mode}`}>
        <div className="container-fluid flex">
          <a
            className={`navbar-brand text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            href="/"
          >
            Text Editer
          </a>

          <a className="text-white" href="/">
            About Us
          </a>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="flex justify-center">
            <div className="form-check form-switch">
              <input
                className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
              />
              <label
                className={`form-check-label inline-block text-${
                  props.mode === "light" ? "slate-900" : "slate-400"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btntext}
              </label>
            </div>
            {/* <div className="form-check form-switch">
              <input
                className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.redmode}
              />
              <label
                className={`form-check-label inline-block text-${
                  props.mode === "light" ? "red" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode}
              </label>
            </div> */}
            <div onClick={props.colorChange} className="colorPallets mx-3 ">
              <input type="color" id="colorpicker" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
