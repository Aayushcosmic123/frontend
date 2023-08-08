import Link from "next/link";
import React from "react";

export default function MyHead({ title, description, image, url }) {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px 10px",
    background: "#94b8b8",
    color: "#fff", 
  };

  const titleStyle = {
    fontSize: "25px",
    margin: "10px 10px 10px", 
    color: "black", 
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", 
    animation: "fadeInDown 1.5s ease-in-out", 
  };

  const featureStyle = {
    display: "flex",
    flexDirection: "column", 
    alignItems: "center", 
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    background: "#fff",
    color: "#333", 
    transition: "transform 0.3s ease-in-out", 
    cursor: "pointer", 
  };

  const iconStyle = {
    fontSize: "25px",
    color: "#ff9800",
  };

  const handleFeatureHover = (event) => {
    event.currentTarget.style.transform = "scale(1.02)";
  };

  const handleFeatureLeave = (event) => {
    event.currentTarget.style.transform = "scale(1)"; 
  };

  return (
    <div  style={containerStyle}>
      <h3 style={titleStyle}>Welcome to Linkspectrum - Simplify Your Links, Amplify Your Reach!</h3>
      
      <div className="m-3"
        style={featureStyle}
        onMouseEnter={handleFeatureHover} 
        onMouseLeave={handleFeatureLeave} 
      >
        <span style={iconStyle} role="img" aria-label="Rocket">🚀</span>
        <div>
          <p><strong>Streamline Your Online Presence</strong></p>
          <p>Share all your social media, portfolios, and content with just one link. No more bio link chaos.</p>
        </div>
      </div>

      <div className="m-3"
        style={featureStyle}
        onMouseEnter={handleFeatureHover}
        onMouseLeave={handleFeatureLeave}
      >
        <span style={iconStyle} role="img" aria-label="Palette">🎨</span>
        <div>
          <p><strong>Your Profile, Your Style</strong></p>
          <p>Customize your profile to showcase your personality. Colors, profile pictures - make it uniquely you.</p>
        </div>
      </div>
      <div className="m-3"
        style={featureStyle}
        onMouseEnter={handleFeatureHover}
        onMouseLeave={handleFeatureLeave}
      >
        <span style={iconStyle} role="img" aria-label="Globe">🌐</span>
        <div>
          <p><strong>Join the Movement</strong></p>
          <p>Countless creators and professionals are already using LinkSpectrum to shine online.</p>
        </div>
      </div>
      <div className="justify-center items-center text-xl mt-5 p-3 font-serif font-bold text-black hover:text-blue-950">
         <Link href="/apply" >Click here To explore ↗️</Link>
      </div>
    </div>
  );
}
