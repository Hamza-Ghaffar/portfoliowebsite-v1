import React from "react";
import { Img } from "react-image";
import "./tools.css";
import coding from "../../assets/jenkins.png";
import iot from "../../assets/huawei.webp";
import iot2 from "../../assets/docker.png";
import cover3 from "../../assets/kubernet.png";
import coding2 from "../../assets/python.png";
import cover2 from "../../assets/git.png";

export const Tools = () => {
  const images = [coding, iot2, cover3, coding2, cover2];

  return (
    <div>
      <section id="toolPage">
        <div id="clients">
          <div className="toolsImgs">
            {images.map((image, index) => (
              <Img
                className="toolsImg"
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
