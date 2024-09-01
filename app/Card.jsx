"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ item, i, targetScale, range, progress }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

 const scale = useTransform(progress, range, [1, targetScale]);


  return (
    <div className={` h-screen flex justify-center items-center sticky top-0 `}>
      <motion.div
        ref={container}
        className={`flex  m-3 relative flex-col items-center gap-4 p-4 px-6 rounded-xl  top-[-10%] `}
        style={{ backgroundColor: item.color, top: `calc(-10% + ${i * 15}px)`, scale}}
      >
        <h1 className={"text-5xl"}>{item.title}</h1>
        <div className={"w-full flex  justify-between gap-4"}>
          <p className={"text-2xl"}>{item.description}</p>
          <div
            className={
              "min-w-[250px] rounded-2xl max-h-[250px] overflow-hidden"
            }
          >
            <motion.div
              style={{ scale: imageScale }}
              className={"w-full h-full"}
            >
              <img
                src={item.img}
                alt={item.title}
                className={"w-full h-full object-cover"}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
