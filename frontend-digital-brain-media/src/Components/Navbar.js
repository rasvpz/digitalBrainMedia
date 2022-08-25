import React from 'react'
import logo from './assest/img/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
       <header className="header-area">
            <div className="famie-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        <nav className="classy-navbar justify-content-between" id="famieNav">
                            <a href="index.html" className="nav-brand"><img src= { logo } alt="" /></a>
                            <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>
                            <div className="classy-menu">
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
                            <div className="classynav">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                     <li><Link to="/products">Our Product</Link></li>
                                      <li><Link to="/contact">Contact</Link></li>
                                       <li> | </li>
                                      <li><Link to="/register">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            </div>
                            </div>
                        </nav>
                </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar
