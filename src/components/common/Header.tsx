"use client";

import { useEffect, useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import "./Header.css";

type ThemeId = "day" | "night";

export default function Header() {
    const [themeId, setThemeId] = useState<ThemeId>("day");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        try {
            const savedTheme = window.localStorage.getItem("ram-theme") as ThemeId | null;
            if (savedTheme === "night" || savedTheme === "day") {
                setThemeId(savedTheme);
                document.documentElement.dataset.theme = savedTheme;
            }
        } catch { }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = themeId;
        try {
            window.localStorage.setItem("ram-theme", themeId);
        } catch { }
    }, [themeId]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }

        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [isMenuOpen]);


    function toggleTheme() {
        setThemeId((id) => (id === "night" ? "day" : "night"));
    }

    return (
        <header className={`nav ${isMenuOpen ? "mobile-open" : ""}`}>
            <div className="container nav-inner">
                <a href="#top" className="brand" aria-label="Rajkot Airport x Mukesh Arts">
                    <span className="brand-mark">
                        <AirportLogoMark />
                    </span>
                    <span className="brand-text">
                        <b>Rajkot Airport x Mukesh Arts</b>
                        <small>Airport Advertising Media </small>
                    </span>
                </a>

                <nav className="nav-links" aria-label="Primary">
                    {/* <a href="#why">Why Airport</a>
                    <a href="#identity">Identity</a>
                    <a href="#inventory">Inventory</a>
                    <a href="#future">CRM Layer</a>
                    <a href="#contact">Contact</a> */}
                    <a href="#">About Us</a>
                    <a href="#">Inventory</a>
                    <a href="#">Packages</a>
                    <a href="#">Why Airport Media</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact Us</a>
                </nav>

                <div className="nav-end">
                    <FlightToggle themeId={themeId} onToggle={toggleTheme} />

                    <a href="#inventory" className="btn-primary">
                        Unlock Inventory
                    </a>
                </div>
                {/* <button
                    type="button"
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button> */}
                <button
                    type="button"
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <HiXMark size={22} /> : <HiBars3BottomRight size={22} />}
                </button>
            </div>
        </header>
    );
}

function FlightToggle({
    themeId,
    onToggle,
}: {
    themeId: ThemeId;
    onToggle: () => void;
}) {
    const isNight = themeId === "night";

    return (
        <button
            type="button"
            onClick={onToggle}
            className="toggle"
            aria-pressed={isNight}
            aria-label={isNight ? "Switch to Day Takeoff" : "Switch to Night Runway"}
            title={isNight ? "Switch to Day Takeoff" : "Switch to Night Runway"}
        >
            <span className="toggle-scene" aria-hidden="true">
                <span className="toggle-sun" />
                <span className="toggle-moon" />
                <span className="toggle-cloud toggle-cloud-a" />
                <span className="toggle-cloud toggle-cloud-b" />
                <span className="toggle-star toggle-star-1" />
                <span className="toggle-star toggle-star-2" />
                <span className="toggle-star toggle-star-3" />
                <span className="toggle-runway" />
                <span className="toggle-plane">
                    <Airliner />
                </span>
                <span className="toggle-trail" />
            </span>

            <span className="toggle-label">
                <small>{isNight ? "Night" : "Day"}</small>
                <b>{isNight ? "Runway" : "Takeoff"}</b>
            </span>
        </button>
    );
}

function Airliner() {
    return (
        <svg
            viewBox="0 0 60 36"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M29 7 Q30 2.5 30 2.5 Q30 2.5 31 7 L31 13" strokeWidth="1.3" />
            <path d="M24 14 L36 14" strokeWidth="1.3" />
            <path d="M24 14 L23 13" strokeWidth="1.2" />
            <path d="M36 14 L37 13" strokeWidth="1.2" />
            <ellipse cx="30" cy="20" rx="4" ry="6" strokeWidth="1.3" />
            <path d="M6 25 L25 17 L25 20 L9 27 Z" strokeWidth="1.3" />
            <path d="M54 25 L35 17 L35 20 L51 27 Z" strokeWidth="1.3" />
            <ellipse cx="15" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />
            <ellipse cx="45" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />
            <g strokeWidth="0.8" opacity="0.6">
                <path d="M12 30 L12 33" />
                <path d="M15 30 L15 34" />
                <path d="M18 30 L18 33" />
                <path d="M42 30 L42 33" />
                <path d="M45 30 L45 34" />
                <path d="M48 30 L48 33" />
            </g>
        </svg>
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

