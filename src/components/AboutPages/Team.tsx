"use client";

import React from "react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
  twitter: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Miroslav Lichy",
    role: "Managing Partner",
    image: "/images/team1.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Miriam Kypelárová",
    role: "Managing Director | Head of Consulting",
    image: "/images/team2.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Marcela Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team3.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Petr Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team4.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Petr Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team5.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Petr Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team6.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Team() {
  return (
    <section className="bg-white py-20 px-5">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h1 className="text-[48px] font-bold text-center text-heading font-sans">
            Meet Our Experts
          </h1>
        </motion.div>

        <motion.p
          className="text-gray-600 font-normal text-start mt-5 font-sans text-[16px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}>
          At Connect Europe, expertise is our foundation. Our clients trust us
          for our deep industry knowledge, professionalism, and commitment to
          continuous development. We invest in our consultants to ensure
          top-tier service and results across every project.
        </motion.p>
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative h-[400px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all cursor-pointer duration-500 group-hover:opacity-100"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-opacity-75 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:bg-black/50">
                  <div className="flex absolute bottom-0">
                    <a href={member.linkedin} className="text-white p-3">
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-white p-3">
                      <Mail />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="bg-white p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 mt-2">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
