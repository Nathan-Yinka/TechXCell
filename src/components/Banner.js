import React from "react";
import Laptop from "../assets/macbook.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div
      name="home"
      className="relative isolate bg-main-color flex items-center overflow-hidden"
    >
      <div className="absolute -z-20 -bottom-32 drop-shadow-xl">
        <h1 className=" text-[#161823] drop-shadow-lg text-center text-[20rem] font-black">
          TechXcell <br /> SOLUTION
        </h1>
      </div>
      <motion.img
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        src={Laptop}
        alt=""
        className="absolute hidden md:block -z-10 bottom-5 lg:bottom-10 right-0 lg:-right-32 w-[400px] lg:w-[900px]"
      />
      <div className="max-w-[85%] w-full m-auto flex flex-col justify-center gap-10 items-center md:items-start py-36 text-white">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:text-start text-5xl md:text-7xl lg:text-8xl font-semibold"
        >
          A Website that <br />{" "}
          <span className="text-default">Leads to Customers</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:text-start text-slate-400 max-w-[410px]"
        >
          Our web design company specializes in the Professional creation of
          unique website that converts visitors to customers
        </motion.p>
        <Link to="whypage" smooth={true} duration={500}>
          <motion.button
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="default-border"
          >
            Read More
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
