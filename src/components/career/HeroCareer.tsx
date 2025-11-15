import Image from "next/image";
import React, { useState, useRef } from "react";

export default function HeroCareer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    jobPreference: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF, DOC, or DOCX file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      setCvFile(file);
      simulateUpload(file);
    }
  };

  const simulateUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      alert("Please upload your CV");
      return;
    }

    console.log("Form data:", formData);
    console.log("CV file:", cvFile);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      jobPreference: "",
      message: "",
    });
    setCvFile(null);
    setUploadProgress(0);
    setIsModalOpen(false);

    alert("Application submitted successfully!");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange({ target: { files: [file] } } as any);
    }
  };

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
    "Software Development",
    "Design",
    "Marketing",
    "Sales",
    "Customer Support",
    "Data Science",
    "Project Management",
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
                >
                  ×
                </button>
              </div>
              <p className="text-white/80 mt-2">
                Fill out the form below and we'll notify you when matching
                opportunities become available.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Preference *
                  </label>
                  <select
                    name="jobPreference"
                    value={formData.jobPreference}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  >
                    <option value="">Select your job preference</option>
                    {jobPreferences.map((pref) => (
                      <option key={pref} value={pref}>
                        {pref}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Tell us about your career goals and preferences..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload CV (PDF, DOC, DOCX) *
                  </label>

                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-6 text-center transition ${
                      cvFile
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-primary hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />

                    {!cvFile ? (
                      <div>
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-gray-600 mb-2">
                          Drag & drop your CV here or click to browse
                        </p>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-[#003d85] transition"
                        >
                          Choose File
                        </button>
                        <p className="text-sm text-gray-500 mt-2">
                          Max file size: 5MB • Supported formats: PDF, DOC, DOCX
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">📄</div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {cvFile.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setCvFile(null);
                              setUploadProgress(0);
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>

                        {isUploading && (
                          <div className="space-y-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress}%` }}
                              ></div>
                            </div>
                            <p className="text-sm text-gray-600">
                              Uploading... {uploadProgress}%
                            </p>
                          </div>
                        )}

                        {uploadProgress === 100 && (
                          <div className="flex items-center justify-center space-x-2 text-green-600">
                            <span>✓</span>
                            <span>Upload Complete!</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#003d85] transition"
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
