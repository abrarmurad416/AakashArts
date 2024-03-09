"use client"
import { useState } from "react"

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar has-background-danger-light has-shadow px-6 is-size-4" role="navigation" aria-label="main navigation">
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
          <a className="has-text-danger-dark navbar-item">
            <strong>About</strong>
          </a>
          <a className="has-text-danger-dark navbar-item">
            <strong>Products</strong>
          </a>
          <a className="has-text-danger-dark navbar-item">
            <strong>Reviews</strong>
          </a>
          <a className="has-text-danger-dark navbar-item">
            <strong>Contact</strong>
          </a>
        </div>
      </div>
    </nav>
  )
}
