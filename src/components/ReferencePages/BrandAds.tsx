"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Images = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.png",
  "/brand4.png",
  "/brand5.png",
  "/brand6.png",
  "/brand7.png",
  "/brand8.png",
  "/brand9.png",
  "/brand10.png",
];

// Variants for container and each image item
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1, // 1 second between each image
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BrandAds() {
  return (
    <section className="bg-white py-20">
      <div className="container w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show">
          {Images.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image
                src={image}
                width={200}
                height={200}
                alt="logo"
                className="grayscale hover:grayscale-0 mx-auto duration-300 ease-in-out cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
