import React, { useRef } from "react";

import { FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    href: "https://www.facebook.com/connectEurope.ag",
    icon: <Facebook height={15} width={15} className="text-white " />,
  },
  {
    href: "https://www.instagram.com/connecteurope3/",
    icon: <Instagram height={15} width={15} className="text-white " />,
  },
  {
    href: "https://www.linkedin.com/company/107184862/admin/dashboard/",
    icon: <Linkedin height={15} width={15} className="text-white " />,
  },
  {
    href: "https://www.youtube.com/@ConnectEurope-0",
    icon: <FaYoutube size={15} className="text-white " />,
  },
  {
    href: "https://www.tiktok.com/@connecteurope25?lang=en",
    icon: <FaTiktok size={15} className="text-white " />,
  },
  {
    href: "https://x.com/ConnectEurope0",
    icon: <FaXTwitter size={15} className="text-white " />,
  },
  {
    href: "https://www.pinterest.com/ConnectEurope/",
    icon: <FaPinterest size={15} className="text-white " />,
  },
];
export default function ContactArea() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceID = "service_2240l9s";
    const templateID = "template_ksx7o99";
    const userID = "jKcEkgd1dwWX8suxQ";
    if (!formRef.current) return;

    emailjs.sendForm(serviceID, templateID, formRef.current, userID).then(
      (result) => {
        alert("Message sent successfully!");
        formRef.current?.reset();
        console.log("Email sent successfully:", result.text);
      },
      (error) => {
        alert("Failed to send message. Please try again later.");
        console.error(error);
      }
    );
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* Left Column - Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <h1 className="text-[24px] font-bold text-heading">
              How Can We Help You?
            </h1>
            <p className="text-sm text-gray-600">
              Fill out the form below, and a member of our team will get back to
              you shortly.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="employee"
                  className="text-sm font-bold text-heading mb-1">
                  Position Needed
                </label>
                <select
                  name="position"
                  id="employee"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="Employee">Employee</option>
                  <option value="Workers">Workers</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-heading mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-heading mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-bold text-heading mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="phone"
                  required
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="report"
                  className="text-sm font-bold text-heading mb-1">
                  Message / Job Description
                </label>
                <textarea
                  id="report"
                  name="message"
                  rows={4}
                  required
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                required
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                I consent to the processing of my personal data in accordance
                with GDPR.
              </label>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                type="submit"
                className="bg-primary hover:bg-heading cursor-pointer text-white px-6 py-3 rounded-md font-semibold transition-all">
                Send Request
              </button>
            </div>
          </form>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-[24px] font-semibold text-heading ">
                Contact information
              </h2>
              {/* <p className="text-[16px] text-gray-600">
                Killary Janunkova 2 | Banská Bystrica | 97401 | Slovakia
              </p> */}
              <div className="flex flex-col space-y-4 mt-6">
                <address className="not-italic  cursor-pointer space-y-1 mt-20 ">
                  <p className="text-heading font-bold text-[20px]">
                    📧Get in Touch
                  </p>
                  <p className="text-[16px] text-gray-600">
                    {" "}
                    Fill out the form below, and a member of our team will get
                    back to you shortly.
                  </p>
                  <a
                    href="mailto:contact@connecteurope.agency"
                    className="text-[20px] text-primary">
                    contact@connecteurope.uk
                  </a>
                </address>
                <address className="not-italic cursor-pointer space-y-1">
                  <p className="text-heading font-bold text-[20px]">
                    📞Call Us
                  </p>
                  <a
                    href="tel:+421948123456"
                    className="text-[20px] text-primary">
                    +421 948 123 456
                  </a>
                </address>
                <address className="not-italic cursor-pointer space-y-1">
                  <p className="text-heading font-bold text-[20px]">
                    📍UK (Head) Office
                  </p>
                  <p className="text-[16px] text-gray-600">
                    703 Hawker Court 5 Bolinder Way, London, United Kingdom, E3
                    3UH,
                  </p>
                </address>
                <address className="not-italic cursor-pointer space-y-1">
                  <p className="text-heading font-bold text-[20px]">
                    📍UAE Office
                  </p>
                  <p className="text-[16px] text-gray-600">
                    Al Ittihad St - Hay Al Nahda - Sharjah - United Arab
                    Emirates, Sharjah
                  </p>
                </address>
                <address className="not-italic cursor-pointer space-y-1">
                  <p className="text-heading font-bold text-[20px]">
                    📍Dhaka Office
                  </p>
                  <p className="text-[16px] text-gray-600">
                    Block-B, House #5, Road-2, Dhaka 1216, Mirpur-10, Bangladesh
                  </p>
                </address>
                <div>
                  <p className="text-heading font-bold text-[20px]">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {socialLinks.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-primary group p-2 rounded-md flex items-center hover:bg-heading duration-200 cursor-pointer justify-center ${
                          index !== 0 ? "ml-0" : ""
                        }`}>
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
