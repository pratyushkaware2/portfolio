import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Vision Based Robot Medical Equipment Manipulation",
    img: "./robot.png",
    desc: "Built Object Detection Model with a self-made dataset of more than 500 images in Matlab. Trained YOLOv4 model and achieved Mean Average Precision of 88%. Robot Arm locates the object and picks it up!",
    link: "https://www.youtube.com/watch?v=wW1ouEXEjbY"
  },
  {
    id: 3,
    title: "Home Decor VR Game",
    img: "./vr.png",
    desc: "Developed a Home Decor game in Unity where the user can place and manipulate different types of furniture in a room. Created the dataset. Ran ML model using Baracuda for Android.",
    link: "https://www.youtube.com/watch?v=wW1ouEXEjbY"
  },
  {
    id: 2,
    title: "Robot Automation For Chemical Synthesis",
    img: "./mlsab.png",
    desc: "Working with Franka Emika robot arm using frankalib C++ library to pick up lab equipment such as test tubes and put them in lab equipment. Pressing all the required switches. Basically automating the synthesis process.",
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link && <button><a href={item.link}>See More</a></button>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
