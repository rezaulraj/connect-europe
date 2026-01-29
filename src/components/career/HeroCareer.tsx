import Image from "next/image";
import React, { useState } from "react";

export default function HeroCareer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const countries = [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
  ];

  const jobPreferences = [
    "Construction Worker",
    "Electrician",
    "Plumber",
    "Welder",
    "Carpenter",
    "Painter",
    "Car Painter",
    "Mason",
    "Factory Worker",
    "Warehouse Worker",
    "Forklift Operator",
    "Delivery Driver",
    "Cleaner",
    "Housekeeping",
    "Security Guard",
    "Gardener",
    "Mechanic",
    "Auto Technician",
    "Kitchen Helper",
    "Cook",
    "Baker",
    "Butcher",
    "Farm Worker",
    "Packer",
    "Loading & Unloading Worker",
    "Machine Operator",
    "AC Technician",
    "Pipe Fitter",
    "Tailor",
    "Waiter / Service Staff",
    "Other",
  ];

  return (
    <>
      <section className="bg-primary min-h-screen pt-24 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium shadow-md backdrop-blur-md">
              ⭐ 4.8/5 Rated by 1000+ Employers
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-heading">
              Start Your <span className="text-white">Career Journey</span> With
              Confidence
            </h1>

            <p className="text-lg text-white/90 max-w-xl">
              Discover opportunities, grow your skills, and connect with trusted
              employers worldwide. Your future starts today.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  const section = document.querySelector("#jobs-sections");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-heading text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#003d85] transition cursor-pointer uppercase"
              >
                Find Open Position
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition uppercase cursor-pointer"
              >
                Enroll for Future Jobs
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -top-5 -right-5 bg-heading text-white px-5 py-3 rounded-3xl shadow-lg text-sm font-semibold">
                Need Workers for My Business →
              </div>

              <Image
                src="/images/career.avif"
                width={460}
                height={480}
                alt="Career"
                className="w-[460px] h-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-primary text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Enroll for Future Jobs</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              <p className="text-white/80 mt-2">
                Fill out the form below and we&apos;ll notify you when matching
                opportunities become available.
              </p>
            </div>

            <form
              action="https://formsubmit.co/da8df489f587737b7c1d54a0e94773b2"
              method="POST"
              encType="multipart/form-data"
              className="p-6 space-y-6"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="Future Job Enrollment - Connect Europe"
              />
              <input
                type="hidden"
                name="_next"
                value="https://connecteurope.uk/thank-you"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for enrolling for future jobs at Connect Europe."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="Country"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  >
                    <option value="">Select country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Preference */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Preference *
                  </label>
                  <select
                    name="Job Preference"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  >
                    <option value="">Select job</option>
                    {jobPreferences.map((job) => (
                      <option key={job} value={job}>
                        {job}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="Tell us about your career goals"
                  />
                </div>

                {/* CV Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload CV *
                  </label>
                  <input
                    type="file"
                    name="CV"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    PDF / DOC / DOCX — max 5MB
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 border border-gray-300 px-6 py-3 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
