import React from "react";
import './Footer.scss'

/**
 * Basic React footer component
 * @param {String} copyYear The year of the most recent copyright reservation 
 * @returns Footer component.
 */
const Footer = ({copyYear}) => {
    return (
        <div className="footer-content-container">
            <div className="footer-text-content">
                <p>Nest Track &copy; Team Five Software {copyYear}</p>
            </div>
        </div>
    )
}

export default Footer;