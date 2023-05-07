import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  const projecrDone = useRef(null);

  const animationProject = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (projecrDone.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Kuldeep Kumar Gupta
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:guptakul0001@gmail.com">Hire ME</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationProject}
                  ref={projecrDone}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article id="data_special">
              <p>
                <span>Contact</span>
              </p>
              <span>guptakul0001@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Kuldeep" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
