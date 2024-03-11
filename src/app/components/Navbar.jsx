"use client"
import { useState } from "react"
import {Link} from "react-scroll/modules"

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar has-background-danger-light has-shadow px-6 is-size-4 is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a 
          role="button" 
          className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
          aria-label="menu" 
          aria-expanded="true" 
          data-target="navbarBasicExample"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link activeClass="active" className="has-text-danger-dark navbar-item" to="about" spy={true} smooth={true} duration={500} ><strong>About</strong></Link>
          <Link activeClass="active" className="has-text-danger-dark navbar-item" to="products" spy={true} smooth={true} duration={500} ><strong>Products</strong></Link>
          <Link activeClass="active" className="has-text-danger-dark navbar-item" to="reviews" spy={true} smooth={true} duration={500} ><strong>Reviews</strong></Link>
          <Link activeClass="active" className="has-text-danger-dark navbar-item" to="contact" spy={true} smooth={true} duration={500} ><strong>Contact</strong></Link>
        </div>
      </div>
    </nav>
  )
}
