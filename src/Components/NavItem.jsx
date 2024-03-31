import React from 'react'

const NavItem = ({ href, text }) => (
    <li className={`navbar-item ${href === "#home" ? "active" : ""}`}>
      <a href={href} className={`navbar-link hover-underline ${href === "#home" ? "active" : ""}`}>
        <div className="separator"></div>
        <span className="span">{text}</span>
      </a>
    </li>
);

export default NavItem