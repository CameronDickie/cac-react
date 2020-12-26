import { Component } from "react";
import { Icon } from "@mdi/react";
import { mdiMenu } from "@mdi/js";

class Header extends Component {
  state = { toggle: false };
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <nav className="flex items-center p-3 flex-wrap">
        {/* Logo contents go here*/}
        <a href="/" className="p-2 lg:mr-4 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-2"viewBox="0 0 552.15 939.37">
            <g id="Layer_9" data-name="Layer 9">
              <path
                d="M633.35,21.27H348.54A133.66,133.66,0,0,0,214.88,154.93h0a133.69,133.69,0,0,0,28,81.89l133.5,172.24a133.66,133.66,0,0,1,0,163.77L242.89,745.08a133.67,133.67,0,0,0-28,81.88h0A133.66,133.66,0,0,0,348.54,960.63H633.35A133.66,133.66,0,0,0,767,827h0a133.61,133.61,0,0,0-28-81.88L605.5,572.83a133.69,133.69,0,0,1,0-163.77L739,236.82a133.64,133.64,0,0,0,28-81.89h0A133.66,133.66,0,0,0,633.35,21.27Z"
                transform="translate(-214.88 -21.27)"
              />
            </g>
          </svg>

          <span className="text-md font-bold uppercase tracking-wide">
            Climate Action Carleton
          </span>
        </a>
        <button
          className="inline-flex m-2 p-1 hover:bg-gray-300 rounded lg:hidden ml-auto nav-toggler"
          data-target="#navigation"
          onClick={() => {
            if (this.state.toggle === true) {
              //if this button is clicked and it is already open, close it
              this.setState({ toggle: false });
              let nav = document.getElementById("navigation");
              nav.className =
                "hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"; //this is the class when it is off
              console.log("should close");
            } else {
              //if this button is clicked and it is already closed, then open it
              this.setState({ toggle: true });
              let nav = document.getElementById("navigation");
              nav.className =
                "top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto";
              console.log("should open");
            }
          }}
        >
          <Icon path={mdiMenu} color="black" size={1} />
        </button>
        <div
          className="hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
            <a
              href="/"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-mono font-bold uppercase hover:text-gray-500 hover:bg-gray-200"
            >
              <span>Home</span>
            </a>
            <a
              href="/about"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-mono  font-bold uppercase hover:text-gray-500 hover:bg-gray-200"
            >
              <span>About</span>
            </a>
            <a
              href="/contact"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-mono font-bold uppercase hover:text-gray-500 hover:bg-gray-200"
            >
              <span>Contact</span>
            </a>
            <a
              href="/divestment"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded font-mono font-bold uppercase hover:text-gray-500 hover:bg-gray-200"
            >
              <span>Divestment</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
