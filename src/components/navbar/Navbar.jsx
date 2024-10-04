import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://github.com/pratyushkaware2">
            <img style = {{width:"100px", height:"100px"}} src="./github.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/pratyushkaware/">
            <img style = {{width:"90px", height:"90px", paddingTop:"10px"}} src="./linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
