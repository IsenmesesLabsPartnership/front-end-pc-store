import "../assets/styles/Header.css"
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import logo from "../assets/images/Logo.png";
import gg_search from "../assets/images/gg_search.png"
import cart from "../assets/images/jam_shopping-cart.png"
import avatar from "../assets/images/ManImage.png"

const Header = () => {
  return (
    <>
      <div className='contentHeader'>
        <div className="contentContainer">
          <NavLink to="/catalog" className="logo">
            <img src={logo} alt="" className="logoImg" />
          </NavLink>

          <div className="links">
            <NavLink to="/laptops" className="headerLinks">
              Laptops
            </NavLink>
            <NavLink to="/desktopPCs" className="headerLinks">
              Desktop PCs
            </NavLink>
            <NavLink to="/networkingDevices" className="headerLinks">
              Networking Devices
            </NavLink>
            <NavLink to="/printersScanners" className="headerLinks">
              Printers & Scanners
            </NavLink>
            <NavLink to="/PCParts" className="headerLinks">
              PC Parts
            </NavLink>
            <NavLink to="/otherProducts" className="headerLinks">
              All Other Products
            </NavLink>
            <NavLink to="/repairs" className="headerLinks">
              Repairs
            </NavLink>
            <NavLink to="/ourDeals" className="headerLinks customLink">
              Our Deals
            </NavLink>
          </div>

          <div className="tools">
            <NavLink to="/search" className="headerLinks">
              <img src={gg_search} alt="" className="gg_search" />
            </NavLink>
            <NavLink to="/shoppingCart" className="headerLinks">
              <img src={cart} alt="" className="cart" />
            </NavLink>
            <NavLink to="/account" className="headerLinks">
              <img src={avatar} alt="" className="avatar" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header