import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="relative isolate overflow-x-hidden bg-white" ref={ref}>
      <div className="max-w-[85%] w-full m-auto flex justify-center lg:justify-between gap-10 flex-wrap text-center py-20 text-6xl font-semibold">
        <p className="absolute hidden md:block overflow-hidden statistics-text-shadow text-white -z-10 bottom-0 left-10 text-[15rem] lg:text-[20rem] font-bold">
          Statistics
        </p>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p>
          {inView ? <CountUp start={0} end={32} duration={3} /> : null}<span className="text-default">+</span>
          </p>
          <p className="text-lg">Professionals team</p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p>
          {inView ? <CountUp start={0} end={200} duration={3} /> : null}<span className="text-default">+</span>
          </p>
          <p className="text-lg">Satisfied customers</p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p>
          {inView ? <CountUp start={0} end={175} duration={3} /> : null}<span className="text-default">+</span>
          </p>
          <p className="text-lg">Successful projects</p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p>
          {inView ? <CountUp start={0} end={5} duration={3} /> : null}<span className="text-default">+</span>
          </p>
          <p className="text-lg">Years of experience</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
