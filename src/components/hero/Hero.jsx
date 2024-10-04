import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },

  imageRobot: {
    opacity: "0.8",
    x: -30,
    transition: {
      duration: 10,
      repeat: Infinity,
      type:"spring",
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PRATYUSH KAWARE</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend/ML/Robotics Engineer
          </motion.h1>
 
          <a href="https://drive.google.com/file/d/1eBsKa-L4RATavmZecK_7ioFs4vXY4qFD/view?usp=sharing">
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/resume.png"
            alt="scroll"
          />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        MSc. Computer Science
      </motion.div>
      <motion.div className="imageContainer" variants={textVariants} animate='imageRobot'>
        <img src="/robot5.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
