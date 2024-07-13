import React, { useState } from 'react';
// import Logo from '/images/logo.png'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const [navbartext, setNavbar] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      {/* <div className="nav-logo">
        <img src={Logo} alt="" className='logo' />
      </div>
         */}
      
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
      {isMenuOpen && (
          <div className="cancel-btn" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        )}

            <li onClick={() => setNavbar("home")} className={navbartext === "home"? 'active' : ''}>Video {navbartext === "home" && <hr />}</li>
            <li onClick={() => setNavbar("writting")} className={navbartext === "Writting"? 'active' : ''}>Writting{navbartext === "writting" && <hr />}</li>
            <li onClick={() => setNavbar("podcast")} className={navbartext === "podcast"? 'active' : ''}>Podcast{navbartext === "podcast" && <hr />}</li>
            <li onClick={() => setNavbar("portfolio")} className={navbartext === "portfolio"? 'active' : ''}>Portfolio {navbartext === "portfolio" && <hr />}</li>
        </div>
        
        <div className="cancel-btn" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
       <button className="icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
       </button>

    </div>
  );
}

export default Navbar;
