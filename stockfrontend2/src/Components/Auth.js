import React, { useState } from "react";
import "./Auth.css";
import AuthToggle from "./AuthToggle";
import investGif from "./invest(1).gif";
import tradeImage from "./trade.png";
import sec3Image from "./Sec3image.png";
import sec3Img3 from "./Sec3img3.png";
import subImg41 from "./Subimg41.png"; // Import sub image 41
import subImg42 from "./subimg42.png"; // Import sub image 42
import subImg43 from "./subimg43.png"; // Import sub image 43
import InvestIQ from "../images/INVestIQ.png"; // Correct the import path
import buildingsImage from "./Buildings.png"; // Import the new Buildings image

const App = () => {
  const [currentView, setCurrentView] = useState("Auth");

  if (currentView === "AuthToggle") {
    return <AuthToggle />;
  }

  return (
    <div>
      {/* Section 1 with Auth Component */}
      <section id="section1" className="auth-section">
        <div className="image-overlay">
          {/* Company Logo and Text */}
          <div
            className="logo-container"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={InvestIQ}
              alt="InvestIQ Logo"
              className="logo"
              style={{
                height: "40px",
                width: "auto",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                fontSize: "1.0rem",
                fontWeight: "bold",
                color: "black",
              }}
            >
              InvestIQ
            </span>
          </div>

          {/* Sign In Button */}
          <button
            className="auth-btn top-right"
            onClick={() => setCurrentView("AuthToggle")}
          >
            Login/Signup
          </button>

          <img
            src={tradeImage}
            alt="Trade Background"
            className="background-image"
          />
          <div className="overlay-content">
            {/* Main Text Content */}
            <div className="main-text">
              <h1 className="main-title">
                Look First/<br />
                <span className="secondary-title">Then leap</span>
              </h1>
              <p className="subtitle">
                The best trades require research, then commitment.
              </p>
              {/* Get Started Button */}
              <div className="auth-buttons">
                <button
                  className="auth-btn"
                  onClick={() => setCurrentView("AuthToggle")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 with content and GIF */}
      <section
        id="section2"
        style={{ position: "relative", textAlign: "center", padding: "60px 20px" }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "3.5rem", fontWeight: "bold" }}>
          WHERE THE WORLD DOES MARKETS
        </h1>
        <p
          style={{
            marginBottom: "40px",
            fontSize: "1.25rem",
            lineHeight: "1.6",
            maxWidth: "80%",
            margin: "0 auto",
          }}
        >
          Join 90 million traders and investors taking the future into their own hands.
        </p>
        <div id="gif-container" style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={investGif}
            alt="Investing GIF"
            style={{
              width: "70%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" style={{ textAlign: "center" }}>
        <img src={sec3Img3} alt="Section 3 Left Image" className="left-image" />
        <div className="bouncing-text"># FINANCE SIMPLIFIED IN YOUR LANGUAGE</div>
        <img
          src={buildingsImage}
          alt="Buildings"
          style={{
            width: "800px", // Set to 900px width
            height: "auto", // Maintain aspect ratio
            margin: "10px auto",
          }}
        />
        <img src={sec3Image} alt="Section 3 Right Image" className="right-image" />
      </section>

      {/* Section 4 */}
      <section
        id="section4"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "20px",
        }}
      >
        <h2
          style={{
            position: "absolute",
            top: "10px",
            left: "0px",
            fontSize: "2rem",
            fontWeight: "bold",
            zIndex: "3",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Pine Script &gt;
        </h2>
        <p
          style={{
            position: "absolute",
            top: "50px",
            left: "0px",
            fontSize: "1.25rem",
            fontWeight: "normal",
            zIndex: "3",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Trading indicators and strategies built by our community.
        </p>
        <img
          src={subImg41}
          alt="Sub Image 41"
          style={{
            position: "absolute",
            top: "100px",
            left: "10px",
            width: "400px",
            height: "auto",
            zIndex: "2",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "10px",
            width: "400px",
            fontSize: "1.1rem",
            fontFamily: "'Arial', sans-serif",
            zIndex: "3",
          }}
        >
          <strong>Purpose of the Script</strong>
          <p>
            This script identifies the strength of support and resistance levels based on key factors like volume, bounce frequency, and retests. Each level is assigned a score (0-100) and visualized with color-coded labels on the chart.
          </p>

          {/* News Link */}
          <div style={{ marginTop: "20px" }}>
            <a
              href="https://economictimes.indiatimes.com/markets/stocks/live-blog/bse-sensex-today-live-nifty-stock-market-updates-10-december-2024/liveblog/116154182.cms?from=mdr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.1rem",
                fontWeight: "Bold",  // Changed to cursive font
                color: "brown",        // Changed to brown color
                textDecoration: "underline",
              }}
            >
              Click here to read the latest stock market news
            </a>
          </div>
        </div>
        <img
          src={subImg42}
          alt="Sub Image 42"
          style={{
            position: "absolute",
            top: "100px",
            left: "470px",
            width: "420px",
            height: "auto",
            zIndex: "2",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "470px",
            width: "420px",
            fontSize: "1.1rem",
            fontFamily: "'Arial', sans-serif",
            zIndex: "3",
          }}
        >
          <strong>Kalman Trend Levels</strong>
          <p>
            Kalman Trend Levels is an advanced trend-following indicator designed to highlight key support and resistance zones based on Kalman filter crossovers. With dynamic trend analysis and actionable signals, it helps traders interpret market direction and momentum shifts effectively.
          </p>
        </div>
        <img
          src={subImg43}
          alt="Sub Image 43"
          style={{
            position: "absolute",
            top: "100px",
            left: "930px",
            width: "370px",
            height: "auto",
            zIndex: "2",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "930px",
            width: "370px",
            fontSize: "1.1rem",
            fontFamily: "'Arial', sans-serif",
            zIndex: "3",
          }}
        >
          <strong>Liquidity Channels [TFO]</strong>
          <p>
            This indicator was built to visually demonstrate the significance of major, untouched pivots. With traders commonly placing orders at or near significant pivots, these areas are commonly referred to as Resting Liquidity.
          </p>

          {/* Community Reference Heading */}
          <h3
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: "1.5rem",
              color: "brown",  // Changed to brown color
              marginTop: "20px",
            }}
          >
            Community Reference
          </h3>

          {/* Names and phone numbers with reduced font size and tighter gaps */}
          <p style={{ fontSize: "0.9rem", color: "black", marginBottom: "5px" }}>
            Pranavi - 9878654321
          </p>
          <p style={{ fontSize: "0.9rem", color: "black", marginBottom: "5px" }}>
            Charitha - 8909867512
          </p>
          <p style={{ fontSize: "0.9rem", color: "black" }}>
            Shivani - 7867432100
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;