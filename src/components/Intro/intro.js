import React from "react";
import Tools from "../Tools/tools";
import { Link } from "react-scroll";
import "./intro.css";
import PosterImage from "../../assets/Intro-Image.png";
import btnImg from "../../assets/email.png";

function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hi !</span>
          <span className="introText">
            I'm <span className="introName">Hamza Ghaffar</span> <br />
            DEV-OPS Engineer
          </span>
          <p className="introPara">
            I am a dedicated and skilled DevOps engineer with a strong passion
            for designing and implementing efficient CI/CD pipelines. I have
            hands-on experience in creating industry-standard workflows and a
            solid understanding of modern development technologies.
          </p>
          <Link>
            <button className="introBtn">
              <img src={btnImg} alt="Hire me" className="hiremeImg" /> Hire me
            </button>
          </Link>
          <Tools />
        </div>
        <img src={PosterImage} alt="logo" className="posterImage" />
      </section>
    </div>
  );
}

export default Intro;
