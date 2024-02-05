import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineDraw } from "react-icons/md";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const HowPage = () => {
  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="max-w-[85%] w-full m-auto text-center space-y-7">
        <h1 className="text-5xl">
          How It Is <span className="text-default">Going</span>
        </h1>
        <p className="max-w-[560px] w-full m-auto text-faded-black">
          We offer professional web design services at affordable rates to help
          your business attract more visitors and keep them on your site!
        </p>
        <div className="relative isolate overflow-hidden flex flex-wrap gap-10 justify-between">
          <p className="absolute hidden md:block overflow-hidden statistics-text-shadow text-white -z-10 top-0 -mt-24 left-10 text-[15rem] lg:text-[24rem] font-black">
            STEPS
          </p>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center lg:flex-col gap-7"
          >
            <h2 className="text-[#BCBCBC] text-4xl font-semibold">01</h2>
            <div className="border-2 border-[#F35444] inline-flex p-4 rounded-full hover:text-default text-4xl">
              <IoBulbOutline />
            </div>
            <p className="text-xl font-semibold">Info Gathering</p>
          </motion.div>
          <motion.div
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center lg:flex-col gap-7 lg:mt-40"
          >
            <h2 className="text-[#BCBCBC] text-4xl font-semibold">02</h2>
            <div className="border-2 border-[#F35444] inline-flex p-4 rounded-full hover:text-default text-4xl">
              <ImStatsBars />
            </div>
            <p className="text-xl font-semibold">Planning</p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center lg:flex-col gap-7 lg:mt-10"
          >
            <h2 className="text-[#BCBCBC] text-4xl font-semibold">03</h2>
            <div className="border-2 border-[#F35444] inline-flex p-4 rounded-full hover:text-default text-4xl">
              <MdOutlineDraw />
            </div>
            <p className="text-xl font-semibold">Design</p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center lg:flex-col gap-7 lg:mt-36"
          >
            <h2 className="text-[#BCBCBC] text-4xl font-semibold">04</h2>
            <div className="border-2 border-[#F35444] inline-flex p-4 rounded-full hover:text-default text-4xl">
              <TbDeviceDesktopCode />
            </div>
            <p className="text-xl font-semibold">Development</p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center lg:flex-col gap-7 lg:mt-10"
          >
            <h2 className="text-[#BCBCBC] text-4xl font-semibold">05</h2>
            <div className="border-2 border-[#F35444] inline-flex p-4 rounded-full hover:text-default text-4xl">
              <HiOutlineRocketLaunch />
            </div>
            <p className="text-xl font-semibold">Testing & Launch</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowPage;
