import React from "react";

export default function Footer() {
  const footerStyle = {
    background: "#333",
    color: "#fff",
    padding: "20px 0",
    margin: "0 15px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 25px",
    fontWeight: "bold",
    transition: "color 0.3s ease-in-out", 
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} LinkSpectrum All rights reserved.</p>
      <div>
        <a href="/about" style={linkStyle}>
          About Us
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
        <a href="/privacy" style={linkStyle}>
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
