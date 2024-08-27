import React from "react";
import fonder from "../assets/logo.png";
import {
  AiOutlineArrowUp,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={fonder} alt="Founder" />

        <h2>Kuldeep Kumar Gupta</h2>
        <p>Do the best you can until you know better.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="http://instagram.com/kuldeepgupta0001" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="http://linkdine.com/kuldeepkumargupta0001" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/kuldeepgupta0001" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
