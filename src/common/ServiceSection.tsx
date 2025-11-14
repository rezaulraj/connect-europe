"use client";

import Image from "next/image";
import { useInputModel } from "@/context/ModelContext";
import React, { useState } from "react";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Minus, Plus } from "lucide-react";

type ServiceSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  expandableContent?: string[];
  imageSrc: string;
  imageAlt?: string;
  showMoreInfoButton?: boolean;
  reverse?: boolean;
  hideButton?: boolean;
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  subtitle,
  paragraphs,
  expandableContent,
  imageSrc,
  imageAlt = "Service Image",
  showMoreInfoButton = true,
  hideButton = false,
  reverse = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { openModel } = useInputModel();

  return (
    <section id={id} className="w-full px-6 py-12 md:py-20 max-w-7xl mx-auto">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}>
        {/* Text Content */}
        <motion.div
          className={`${reverse ? "lg:[direction:ltr]" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}>
          <h4 className="text-lg font-medium text-gray-500">{subtitle}</h4>
          <h2 className="text-4xl font-bold text-heading mb-6">{title}</h2>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-gray-700 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}

          {/* Expandable content */}
          {expandableContent && (
            <div className="mb-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-primary font-semibold hover:text-heading duration-200 cursor-pointer">
                {isExpanded ? <Minus /> : <Plus />}
                {isExpanded ? "Less" : "More"}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="pt-4">
                      {expandableContent.map((text, i) => (
                        <p
                          key={i}
                          className="text-gray-700 mb-4 leading-relaxed">
                          {text}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {showMoreInfoButton && (
              <button
                onClick={openModel}
                className="border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition-all">
                MORE INFORMATION
              </button>
            )}

            {!hideButton && (
              <button
                onClick={openModel}
                className="bg-primary hover:bg-heading cursor-pointer text-white px-6 py-3 rounded-md font-semibold transition-all">
                I AM INTERESTED
              </button>
            )}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="self-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
