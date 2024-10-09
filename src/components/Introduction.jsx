import { motion } from "framer-motion";
import { TfiArrowCircleDown } from "react-icons/tfi";
import jcapImg from "../assets/capito_j_portrait.png";
import { socialMediaIcons } from "../constants/lists";
import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Introduction = () => {
  const { scrollToAbout } = useGlobalContext();
  const socialRef = useRef([]);

  const displayIcons = () => {
    socialRef.current.forEach((item, i) => {
      if (item) {
        item.style.transition = `opacity 1.25s ease ${(i + 1) * 0.25}s`;
        item.style.opacity = 1;
      }
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(displayIcons, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const text = "Crafting experiences, one line at a time.".split(" ");
  const totalDuration = 1.5 + (text.length - 1) / 5.5;
  return (
    <div className="flex flex-col h-full justify-center items-center min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-300 to-white">
      <div className="text-center w-11/12 max-w-7xl font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl gap-2 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: totalDuration }}
        >
          <div className="flex flex-col font-light justify-center items-center">
            <div className="flex flex-col items-center lg:flex-row gap-6">
              <img
                src={jcapImg}
                alt=""
                className="rounded-full w-10 lg:w-14 lg:h-14"
              />
              <div className="flex flex-col text-center lg:text-start">
                <span className="text-xs lg:text-xl">portfolio curated by</span>
                <span className="text-sm lg:text-3xl text-start">
                  joshua emmanuel capito
                </span>
              </div>
            </div>
          </div>
        </motion.h1>
        <h1>
          {text.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i / 3,
              }}
              className="font-extrabold"
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        <ul className="flex items-center justify-center text-4xl gap-5 mt-12">
          {socialMediaIcons.map((item, i) => {
            const { id, icon, url } = item;
            return (
              <li
                key={id}
                ref={(el) => (socialRef.current[i] = el)}
                className="flex flex-col justify-center items-center opacity-0"
              >
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: totalDuration }}
        className=" flex flex-col justify-center items-center gap-2 mt-20"
      >
        <span className="font-light text-sm lg:text-xl">who am I?</span>
        <span>
          <button type="button" onClick={scrollToAbout}>
            <TfiArrowCircleDown className="text-5xl lg:text-5xl font-bold hover:text-yellow-500 transition-all 2s easeInOut" />
          </button>
        </span>
      </motion.a>
    </div>
  );
};

export default Introduction;
