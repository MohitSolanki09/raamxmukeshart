import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                {/* <div className="footer-brand">
                    <h2>Rajkot Airport x Mukesh Arts <span className="brand-mark">
                        <AirportLogoMark />
                    </span></h2>
                    <p>
                        Premium airport advertising media for brands looking to reach
                        high-value travellers across Rajkot Airport.
                    </p>

                    <a href="#contact" className="footer-cta">
                        Request Media Kit →
                    </a>
                </div> */}
                <div className="footer-brand">
                    <div className="footer-brand-row">
                        <h2>Rajkot Airport x Mukesh Arts</h2>

                        <span className="footer-logo">
                            <AirportLogoMark />
                        </span>
                    </div>

                    <p>
                        Premium airport advertising media for brands looking to reach
                        high-value travellers across Rajkot Airport.
                    </p>

                    <a href="#contact" className="footer-cta">
                        Request Media Kit →
                    </a>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Explore</h4>
                        <a href="#about">About Us</a>
                        <a href="#inventory">Inventory</a>
                        <a href="#packages">Packages</a>
                        <a href="#gallery">Gallery</a>
                    </div>

                    <div>
                        <h4>Media</h4>
                        <a href="#digital">Digital Screens</a>
                        <a href="#static">Static Boards</a>
                        <a href="#branding">Airport Branding</a>
                        <a href="#ooh">OOH Media</a>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <p>Rajkot International Airport</p>
                        <p>Saurashtra, Gujarat</p>
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