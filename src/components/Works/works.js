import React from "react";
import { Img } from "react-image";
import "./works.css";
import coding from "../../assets/coding.jpg";
import iot from "../../assets/iot.jpg";
import iot2 from "../../assets/cover1.jpg";
import cover3 from "../../assets/cover3.jpg";
import coding2 from "../../assets/coding2.jpg";
import cover2 from "../../assets/cover2.jpg";

function Works() {
  const images = [coding, iot, iot2, cover3, coding2, cover2];

  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDese">
          Paying attention to the smallest details and making sure my work meets
          industry standards.
        </span>
        <div className="worksImgs">
          {images.map((image, index) => (
            <Img
              key={index}
              src={image}
              alt={`work-${index}`}
              className="worksImg"
              loader={<div>Loading...</div>} // Loading placeholder
              unloader={<div>Error loading image</div>} // Error placeholder
            />
          ))}
        </div>
        <button className="worksBtn">See More</button>
      </section>
    </div>
  );
}

export default Works;
