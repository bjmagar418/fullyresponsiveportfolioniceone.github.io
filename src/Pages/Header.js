import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
const Header= () => {
  const [menuOpen,setMenuOpen] = useState (false);
    const [backdrop, setBackdrop] = useState(false);

  return (
    /* start 0f header and navigation*/
    <header className="Main-header" /*style={{backgroundColor:'red'}}*/>
      <div
        /* mobile view  very best*/
        className={backdrop ? "backdrop" : ""}
        onClick={(event) => {
          setBackdrop(!backdrop);
          setMenuOpen(!menuOpen);
          event.stopPropagation();
        }}
      ></div>
      <NavLink to="/" className="Portfolio-logo">
        Porfolio
      </NavLink>
      <div>
        <nav className="Nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeNav-link" : "Nav-Links-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Skill"
            className={({ isActive }) =>
              isActive ? "activeNav-link" : "Nav-Links-link"
            }
          >
            Skill
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              isActive ? "activeNav-link" : "Nav-Links-link"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "activeNav-link" : "Nav-Links-link"
            }
          >
            Contact
          </NavLink>
        </nav>

        {menuOpen && (
          <nav className={menuOpen ? " MobileNav-Links" : "Nav-links"}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeNav-link" : "MobileNav-Links-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Skill"
              className={({ isActive }) =>
                isActive ? "activeNav-link" : "MobileNav-Links-link"
              }
            >
              Skill
            </NavLink>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive ? "activeNav-link" : "MobileNav-Links-link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "activeNav-link" : "MobileNav-Links-link"
              }
            >
              Contact
            </NavLink>
          </nav>
        )}
      </div>
      <div
        className="menu"
        onClick={(event) => {
          setMenuOpen(!menuOpen);
          setBackdrop(!backdrop);
          event.stopPropagation();
          console.log();
        }}
      >
        <FaAlignJustify className="Menu-header-menu-icon-icon" />
      </div>
    </header>
    /* end 0f header and navigation*/
    /* start Landing [hoomepage]*/
  );
};
export default Header;
