import { Component } from "react";
import { NavLink as Link } from "react-router-dom";

import { ReactComponent as HomeIco } from "../assets/svgs/home.svg";
import { ReactComponent as AboutIco } from "../assets/svgs/about.svg";
import { ReactComponent as ContactIco } from "../assets/svgs/contact.svg";
import { ReactComponent as DivestIco } from "../assets/svgs/divestment.svg";
import { ReactComponent as MenuIco } from "../assets/svgs/menu.svg";
import { ReactComponent as RightArrow } from "../assets/svgs/chevron-right.svg";
import { ReactComponent as LeftArrow } from "../assets/svgs/chevron-left.svg";
import logo from "../assets/images/logo-cropped.png";

import React, { useState } from "react";

import "../styles/header.css";
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function TextContents(props) {
  const [open, setOpen] = useState(true);
  return (
    <div className="text-xl lg:mx-8 px-2 font-bold my-auto">
      Climate Action Carleton
      <div className="hidden lg:inline">
        {/* This is if the quote has been closed*/}
        {!open && (
          <LeftArrow
            className="inline cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          ></LeftArrow>
        )}
        {/* This is is the quote has been opened*/}
        {open && (
          <RightArrow
            className="inline cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          ></RightArrow>
        )}
        {open && (
          <div className="inline uppercase text-gray-300">The Time is Now</div>
        )}
      </div>
    </div>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <button
        className="icon-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.icon}
      </button>

      {open && props.children}
    </li>
  );
}
function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <Link to={props.url} className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        <div className="px-2">{props.children}</div>
      </Link>
    );
  }
  return (
    <div className="dropdown">
      <DropdownItem url="/" leftIcon={<HomeIco />}>
        Home
      </DropdownItem>
      <DropdownItem url="/about" leftIcon={<AboutIco />}>
        About
      </DropdownItem>
      <DropdownItem url="/contact" leftIcon={<ContactIco />}>
        Contact
      </DropdownItem>
      <DropdownItem url="/divestment" leftIcon={<DivestIco />}>
        Divestment
      </DropdownItem>
    </div>
  );
}
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
      <div>
        <Navbar>
          <Link to="/" className="flex w-10 py-3">
            <img className="" src={logo}></img>
          </Link>
          <TextContents></TextContents>
          <div className="hidden ml-auto lg:inline-flex">
            <Link
              to="/"
              exact
              activeClassName="link-active"
              className="link-inactive outline-none lowercase"
            >
              Home
            </Link>
            <Link
              to="/about"
              exact
              activeClassName="link-active"
              className="link-inactive outline-none lowercase"
            >
              About
            </Link>
            <Link
              to="/contact"
              exact
              activeClassName="link-active"
              className="link-inactive outline-none lowercase"
            >
              Contact
            </Link>
            <Link
              to="/divestment"
              exact
              activeClassName="link-active"
              className="link-inactive outline-none lowercase"
            >
              Divestment
            </Link>
          </div>
          <div className="flex lg:hidden ml-auto">
            <NavItem icon={<MenuIco />}>
              {/* Dropdown goes here */}
              <DropdownMenu />
            </NavItem>
          </div>
        </Navbar>
        <div className="bg-gray-200 h-0.5 w-full"></div>
      </div>
    );
  }
}

export default Header;
