import React from "react";

import { Img } from "react-image";
import "./contact.css";
import coding from "../../assets/UET.png";

import iot2 from "../../assets/Majid Al Futtaim Logo.png";
import cover3 from "../../assets/huawei.webp";
import coding2 from "../../assets/AJM.png";
import cover2 from "../../assets/PTCL.png";

export const Contact = () => {
  const images = [coding, iot2, cover3, coding2, cover2];

  return (
    <div>
      <section id="contactPage">
        <div id="clients">
          <h1 className="contactPageTitle">My Clients</h1>
          <p className="clientDesc">
            We value your partnership and are here to assist you with any
            inquiries you may have. Please feel free to reach out!
          </p>
          <div className="clientImgs">
            {images.map((image, index) => (
              <Img
                className="clientImg"
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
          <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <p className="clientDesc">Reach out for any inquiries.</p>
            <form action="" className="contactForm">
              <input
                type="text"
                className="name"
                placeholder="Your Name"
                id="name"
              />
              <input
                type="email"
                className="email"
                placeholder="Your email"
                id="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="message"
              ></textarea>
              <button className="submitBtn" type="submit" value="send">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
