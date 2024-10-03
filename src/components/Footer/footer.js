import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Correct Font Awesome import

const socialMedia = [
  {
    name: "Facebook",
    icon: "fab fa-facebook-f", // Correct Font Awesome class
    link: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter", // Correct Font Awesome class
    link: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram", // Correct Font Awesome class
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin-in", // Correct Font Awesome class
    link: "https://www.linkedin.com",
  },
  {
    name: "GitHub",
    icon: "fab fa-github", // Correct Font Awesome class
    link: "https://www.github.com",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          {socialMedia.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={platform.icon} aria-hidden="true"></i>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} calledhamzy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
