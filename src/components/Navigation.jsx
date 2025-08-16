import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx"

function Navigation({ activeSection, onSectionChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    // { id: "profiles", label: "Profiles" },
    { id: "contact", label: "Contact" },
  ];

  const handleSectionClick = (id) => {
    onSectionChange(id);
    setIsMobileMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm" style={{ background: "linear-gradient(to right, #000000, #330033)" }}>
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-4 text-white glow-text" href="/">
          My Portfolio
        </a>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler text-white nav-toggle"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><RxHamburgerMenu /></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? "show" : ""}`} style={{
          background: "#1a001f", // Or your custom dark purple gradient
          padding: "1rem",
          borderRadius: "10px",
        }}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            {sections.map((section) => (
              <li className="nav-item" key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link text-white px-3 rounded-pill ${activeSection === section.id ? "active-nav" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section.id);
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navigation;