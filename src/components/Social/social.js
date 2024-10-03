import React from "react";
import "./social.css"; // Ensure you have styles here
import "@fortawesome/fontawesome-free/css/all.min.css"; // For Font Awesome 6

const socialMedia = [
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    link: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: "fa-brands fa-twitter",
    link: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com",
  },
  {
    name: "GitHub",
    icon: "fa-brands fa-github",
    link: "https://www.github.com",
  },
];

export const SocialMedia = () => {
  return (
    <div id="socialMediaSection">
      <h2>Follow Us</h2>
      <div className="socialIcons">
        {socialMedia.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            className="socialIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={platform.icon} aria-hidden="true"></i>
            <span>{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
