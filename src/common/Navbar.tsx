"use client";
import React, { useState, useEffect, useRef } from "react";

import { FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Link from "next/link";

const navItem = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Get An Employee", link: "/get-an-employee" },
  { name: "HR Support", link: "/get-hr-advice" },
  { name: "References", link: "/reference" },
  { name: "Career", link: "/career" },
  { name: "Contact Us", link: "/contact" },
];
const socialLinks = [
  {
    href: "https://www.facebook.com/connectEurope.ag",
    icon: (
      <Facebook
        height={12}
        width={12}
        className="text-white group-hover:text-primary"
      />
    ),
  },
  {
    href: "https://www.instagram.com/connecteurope3/",
    icon: (
      <Instagram
        height={12}
        width={12}
        className="text-white group-hover:text-primary"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/company/107184862/admin/dashboard/",
    icon: (
      <Linkedin
        height={12}
        width={12}
        className="text-white group-hover:text-primary"
      />
    ),
  },
  {
    href: "https://www.youtube.com/@ConnectEurope-0",
    icon: (
      <FaYoutube size={12} className="text-white group-hover:text-primary" />
    ),
  },
  {
    href: "https://www.tiktok.com/@connecteurope25?lang=en",
    icon: (
      <FaTiktok size={12} className="text-white group-hover:text-primary" />
    ),
  },
  {
    href: "https://x.com/ConnectEurope0",
    icon: (
      <FaXTwitter size={12} className="text-white group-hover:text-primary" />
    ),
  },
  {
    href: "https://www.pinterest.com/ConnectEurope/",
    icon: (
      <FaPinterest size={12} className="text-white group-hover:text-primary" />
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showDotEffect, setShowDotEffect] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const careerLinkRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenEffect = sessionStorage.getItem("careerDotEffectShown");
    if (!hasSeenEffect) {
      setShowDotEffect(true);
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (showDotEffect && isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showDotEffect, isVisible]);

  const handleCareerClick = () => {
    sessionStorage.setItem("careerDotEffectShown", "true");
    setShowDotEffect(false);
    setIsVisible(false);
  };

  useEffect(() => {
    if (showDotEffect && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setShowDotEffect(false), 1000);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showDotEffect, isVisible]);

  return (
    <div className="relative z-50">
      <AnimatePresence>
        {showDotEffect && isVisible && (
          <>
  
            <motion.div
              className="fixed pointer-events-none z-[100]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                left: mousePosition.x - 20,
                top: mousePosition.y - 20,
              }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                <motion.div
                  className="w-6 h-6 rounded-full bg-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              className="fixed pointer-events-none z-[99]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{
                left: mousePosition.x - 30,
                top: mousePosition.y - 30,
              }}
            >
              <motion.div
                className="w-16 h-16 rounded-full border-2 border-blue-300"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="fixed pointer-events-none z-[99]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{
                left: mousePosition.x - 40,
                top: mousePosition.y - 40,
              }}
            >
              <motion.div
                className="w-20 h-20 rounded-full border-2 border-purple-300"
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="fixed pointer-events-none z-[98]"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  left: mousePosition.x - 15,
                  top: mousePosition.y - 15,
                }}
              >
                <div
                  className={`w-8 h-8 rounded-full ${
                    index % 2 === 0 ? "bg-blue-400" : "bg-purple-400"
                  }`}
                />
              </motion.div>
            ))}

            {[...Array(8)].map((_, index) => (
              <motion.div
                key={`particle-${index}`}
                className="fixed pointer-events-none z-[97]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.cos((index / 8) * Math.PI * 2) * 100,
                  y: Math.sin((index / 8) * Math.PI * 2) * 100,
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  left: mousePosition.x - 10,
                  top: mousePosition.y - 10,
                }}
              >
                <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />
              </motion.div>
            ))}

            <motion.div
              className="fixed pointer-events-none z-[96]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{
                left: careerLinkRef.current
                  ? careerLinkRef.current.getBoundingClientRect().left +
                    careerLinkRef.current.offsetWidth / 2 -
                    25
                  : 0,
                top: careerLinkRef.current
                  ? careerLinkRef.current.getBoundingClientRect().top +
                    careerLinkRef.current.offsetHeight / 2 -
                    25
                  : 0,
              }}
            >
              <motion.div
                className="w-12 h-12 rounded-full border-4 border-green-400"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 p-4 lg:px-16 md:px-10 sm:px-5 px-5 flex gap-x-5 justify-between items-center bg-primary shadow-md">
        <div className="flex space-x-2 text-white">
          <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
        </div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <div className="relative">
          <Link
            ref={careerLinkRef}
            href="/career"
            onClick={handleCareerClick}
            className="text-sm md:text-lg lg:text-xl lg:px-10 md:px-8 sm:px-6 px-4 py-2 cursor-pointer duration-200 text-white uppercase hover:text-[#150269] relative z-10"
          >
            Career
            {showDotEffect && isVisible && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </Link>
          <Link
            href="/contact"
            className="border border-white text-sm md:text-lg lg:text-xl lg:px-10 md:px-8 sm:px-6 px-4 py-2 hover:bg-heading hover:border-heading cursor-pointer duration-200 text-white rounded uppercase"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 h-full w-[300px] bg-primary shadow-lg z-50 p-6"
            >
              <div className="flex justify-between items-center mb-0">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="cursor-pointer"
                  />
                </Link>
                <X
                  className="cursor-pointer text-white"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="h-full flex items-start mt-32 justify-center">
                <ul className="space-y-4 flex flex-col items-start">
                  {navItem.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => {
                          setOpen(false);
                          if (item.name === "Career") {
                            handleCareerClick();
                          }
                        }}
                        className="text-xl font-bold text-white uppercase hover:text-heading"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <div className="flex justify-center items-center mt-3">
                    {socialLinks.map((item, index) => (
                      <a
                        key={index}
                        target="_blank"
                        href={item.href}
                        className={`w-7 h-7 bg-heading group p-2 rounded-md flex items-center hover:bg-white duration-200 cursor-pointer justify-center ${
                          index !== 0 ? "ml-2" : ""
                        }`}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
