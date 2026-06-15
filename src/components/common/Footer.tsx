import "./Footer.css";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">

                <div className="footer-brand">
                    <div className="footer-brand-row">
                        <h2>Rajkot Airport   <br /> <em>x</em> Mukesh Arts</h2>

                        <span className="footer-logo">
                            <AirportLogoMark />
                        </span>
                    </div>

                    <p>
                        Premium airport advertising media for brands looking to reach
                        high-value travellers across Rajkot Airport.
                    </p>


                    <div className="footer-actions">
                        <div className="footer-socials">
                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Explore</h4>
                        <a href="#about">About Us</a>
                        <a href="#inventory">Inventory & Packages</a>
                        <a href="#packages">Why Airport Media</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#gallery">Contact Us</a>
                    </div>

                    <div>
                        <h4>Media</h4>
                        <a href="#digital">Digital Screens</a>
                        <a href="#static">Static Boards</a>
                        <a href="#branding">Airport Branding</a>
                        <a href="#ooh">OOH Media</a>
                    </div>

                    <div>
                        <h4>Reach</h4>
                        <p>Rajkot International Airport</p>
                        <p>Mukesh Art Main Office, PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi, Gujarat - 363642</p>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© {new Date().getFullYear()} Rajkot Airport Advertising Media.</p>
                <p>Powered by Mukesh Arts</p>
            </div>
        </footer>
    );
}

function AirportLogoMark() {
    return (
        <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="0" y="0" width="140" height="90" rx="10" fill="currentColor" opacity="0" />
            <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
            <path d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
            <text x="70" y="63" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="24" fontWeight="800" letterSpacing="2.5" fill="#111111">
                MUKESH
            </text>
            <rect x="79" y="70" width="43" height="9" rx="1.5" fill="#E21D2D" />
            <text x="101" y="78" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="8" fontWeight="800" letterSpacing="3" fill="#FFFFFF">
                ART
            </text>
        </svg>
    );
}