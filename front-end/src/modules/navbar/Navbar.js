import { useState } from "react";
import { HamburgerMenu } from "../../icons/HamburgerMenu";
import './Navbar.css';

/**
 * Basic navbar component
 * @param {Object[]} links The links to render in the navbar
 * @param {String} logo The logo of the app 
 * @param {Boolean} darkMode Is the app in Dark Mode
 * @param {Function} toggleDarkMode The function to call to toggle dark mode 
 * @param {Object[]} parentPropagator The function to call to propogate render changes up 
 * @param {String} currentlySelectedLink The href property of link that is currently selected, for styling purposes
 * @returns Navbar component
 * 
 * Example link usage:
 * const links = [
    {label: 'Home', href:'/'},
   ]
 */
const Navbar = ({ links, logo, darkMode, toggleDarkMode, parentPropagator, currentlySelectedLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(currentlySelectedLink ? currentlySelectedLink : '/')

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <p>Picture </p>
          <h2> {logo} </h2>
        </div>
        <div className="navbar-links-container">
          {
            !menuOpen ? <></> : 
            // Only render links if the menu is open
            <div className="navbar-links"> 
              {links.map((e) => (
                <div 
                  key={e.label} 
                  onClick={() => {(parentPropagator(e.href)); setCurrentSelection(e.href)}} 
                  className={e.href === currentSelection ? 'navbar-link-selected' : 'navbar-link'}>{e.label}
                </div>
              ))}
            </div>
          }
          <div className="navbar-content-menu">
            <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;