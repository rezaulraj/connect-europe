"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInputModel } from "@/context/ModelContext";
import { X } from "lucide-react";

const tabs = ["I need an employee", "I need Workers"];

// interface TampletedForm {
//   activeTab: string;
//   name: string;
//   email: string;
//   phone: string;
//   report: string;
//   consent: boolean;
// }

export default function InputModal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isOpen, closeModel } = useInputModel();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    report: "",
    consent: false,
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const serviceID = "service_2240l9s";
    const templateID = "template_ksx7o99";
    const userID = "jKcEkgd1dwWX8suxQ";

    try {
      const emailParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        report: formData.report,
        activeTab: activeTab,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          report: "",
          consent: false,
        });
        closeModel();
      }
    } catch (error) {
      console.error("Email error:", error);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl lg:mr-0 md:mr-0 sm:mr-5 mr-20 shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl px-5 sm:px-10 md:px-10 py-8 sm:py-12 relative overflow-y-auto max-h-[90vh]">
        <button
          title="close"
          onClick={closeModel}
          className="absolute cursor-pointer top-3 right-4 text-xl">
          <X />
        </button>

        <h2 className="text-center mb-2 text-gray-700">
          Fill out the form below, and a member of our team will get back to you
          shortly.
        </h2>
        <p className="text-center mb-6 font-semibold">Position Needed</p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 cursor-pointer py-2 rounded-full border transition ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700"
              }`}
              type="button">
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Hide report if Looking for Work */}
          {activeTab !== "Looking for work" && (
            <textarea
              name="report"
              placeholder="Message / Job Description"
              className="w-full border px-4 py-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.report}
              onChange={handleChange}
            />
          )}

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="consent"
              value={formData.consent ? "true" : "false"}
              onChange={handleChange}
              required
            />
            <span>
              I consent to the processing of my personal data in accordance with
              GDPR.
            </span>
          </label>

          {/* Hidden field to include tab info */}
          <input type="hidden" name="position_type" value={activeTab} />

          <button
            type="submit"
            className="w-full cursor-pointer bg-primary text-white py-2 rounded hover:bg-heading">
            {isSubmitting ? "Submitting..." : "Send Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
