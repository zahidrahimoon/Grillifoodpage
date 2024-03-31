import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo/logo.svg';
import NavItem from './NavItem';

const Navbar = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.scrollY > 100){
        setHeaderActive(true);
      }else {
        setHeaderActive(false);
      }
    }

    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const toggleNavbar = () => {
      setIsActive(!isActive);
      document.body.classList.toggle("nav-active");
    }

    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    navTogglers.forEach(toggler => {
      toggler.addEventListener("click", toggleNavbar);
    });

    return () => {
      navTogglers.forEach(toggler => {
        toggler.removeEventListener("click", toggleNavbar);
      });
    };
  }, [isActive]);
  
  return (
    <header className={`header ${headerActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#home" className="logo">
          <img src={logo} width="160" height="50" alt="Grilli - Home" />
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
          <button className="close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="#" className="logo">
            <img src={logo} width="160" height="50" alt="Grilli - Home" />
          </a>

          <ul className="navbar-list">
            <NavItem href="#home" text="Home" />
            <NavItem href="#menu" text="Menus" />
            <NavItem href="#about" text="About Us" />
            <NavItem href="#service" text="Our Services" />
            <NavItem href="#contact" text="Contact" />
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
              +88-123-123456
            </a>
          </div>

        </nav>

        <a href="#" className="btn btn-secondary">
          <span className="text text-1">Find A Table</span>
          <span className="text text-2" aria-hidden="true">Find A Table</span>
        </a>

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className={`overlay ${isActive ? 'active' : ''}`} data-nav-toggler></div>

      </div>
    </header>
  );
}

export default Navbar;
