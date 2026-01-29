import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import ReactCountryFlag from "react-country-flag";

interface Job {
  SL_No: number;
  Date: string;
  JobCategory: string;
  Country: string;
  Title: string;
  Vacancies: number;
  Industry: string;
  CandidatesOrigin: string;
  Description: string;
  JobType: string;
  Shift: string;
  Gender: string;
  Salary: string;
  Experience: string;
  Requirements: string;
  Status: string;
}


const categoryDescriptions = {
  all: "Browse all available job opportunities across various industries and locations.",
  HandsOn_Jobs:
    "Practical roles requiring technical skills and manual expertise in fields like construction, automotive, and manufacturing.",
  Featured:
    "Highlighted positions with competitive benefits and growth opportunities.",
};

export default function JobSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxSihU_-lx49-gr1h4oe6w1H621Nxy2QHfMEx87gGGQKzfvwyQ3V3TMOxx9ypsR_JFdow/exec?site=Divine_Group",
        );
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs(sampleData);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) => activeCategory === "all" || job.JobCategory === activeCategory,
  );

  const displayedJobs = filteredJobs.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <ClipLoader color="#1b6b12" loading={true} size={50} />
      </div>
    );
  }

  return (
    <div
      id="jobs-sections"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#002a64] mb-4">
          Career Opportunities
        </h1>

        <p className="text-gray-600 mb-6 text-lg">
          {
            categoryDescriptions[
              activeCategory as keyof typeof categoryDescriptions
            ]
          }
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: "all", label: "All Jobs", count: jobs.length },
            {
              key: "HandsOn_Jobs",
              label: "Workforce Jobs",
              count: jobs.filter((j) => j.JobCategory === "HandsOn_Jobs")
                .length,
            },
            {
              key: "Featured",
              label: "Office Administrator",
              count: jobs.filter((j) => j.JobCategory === "Featured").length,
            },
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setActiveCategory(category.key);
                setVisibleCount(6);
              }}
              className={`flex items-center space-x-2 py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-[#1b6b12] text-white shadow-lg shadow-green-500/25"
                  : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
              }`}
            >
              <span>{category.label}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.key
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedJobs.map((job) => (
          <JobCard
            key={job.SL_No}
            job={job}
            onApply={() => {
              setSelectedJob(job);
              setShowApplyForm(true);
            }}
            onShare={() => {
              setSelectedJob(job);
              setShowSharePopup(true);
            }}
          />
        ))}
      </div>

      {visibleCount < filteredJobs.length && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="bg-[#1b6b12] text-white px-8 py-4 rounded-xl hover:bg-[#155a0d] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Load More Jobs ({filteredJobs.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {displayedJobs.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📭</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Jobs Available
          </h3>
          <p className="text-gray-500">
            There are currently no jobs in this category. Please check back
            later.
          </p>
        </div>
      )}

      {showApplyForm && selectedJob && (
        <ApplyForm job={selectedJob} onClose={() => setShowApplyForm(false)} />
      )}

      {showSharePopup && selectedJob && (
        <SharePopup
          job={selectedJob}
          onClose={() => setShowSharePopup(false)}
        />
      )}
    </div>
  );
}

const JobCard: React.FC<{
  job: Job;
  onApply: () => void;
  onShare: () => void;
}> = ({ job, onApply, onShare }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("isHovered", isHovered);
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 bg-gradient-to-r from-gray-50 to-green-50 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <ReactCountryFlag
                countryCode={getCountryCode(job.Country)}
                svg
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                title={job.Country}
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-[#002a64] block">
                {job.Country}
              </span>
              <span className="text-xs text-gray-600">{job.Industry}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
              {job.Vacancies} position{job.Vacancies > 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#002a64] mb-3 leading-tight">
          {job.Title}
        </h3>

        <div className="bg-white/80 rounded-lg p-3 border border-green-200/50">
          <div className="text-sm text-gray-600">Monthly Salary</div>
          <div className="text-lg font-bold text-[#1b6b12]">{job.Salary}</div>
        </div>
      </div>

      <div className="p-6 flex-1">
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-1">Job Type</div>
              <div className="text-sm font-semibold text-blue-700">
                {job.JobType}
              </div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-1">Experience</div>
              <div className="text-sm font-semibold text-orange-700">
                {job.Experience}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-xs text-gray-600 mb-2 font-medium">
              Eligible Candidates From
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {job.CandidatesOrigin}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-600 mb-2 font-medium">
              Requirements:
            </div>
            <div className="text-sm text-gray-800 bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              {job.Requirements}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-600 mb-2 font-medium">
              Job Description:
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {job.Description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-4 border-t border-gray-100 mt-auto">
        <div className="flex space-x-3">
          <button
            onClick={onApply}
            className="flex-1 bg-[#1b6b12] text-white py-3 px-4 rounded-xl hover:bg-[#155a0d] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <span>Apply Now</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button
            onClick={onShare}
            className="flex items-center justify-center w-14 h-12 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:border-gray-400 shadow-sm hover:shadow-md group"
            title="Share job"
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const ApplyForm: React.FC<{
  job: Job;
  onClose: () => void;
}> = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#002a64]">
              Apply for Position
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#002a64] mb-1">
              {job.Title}
            </h3>
            <p className="text-sm text-gray-600">{job.Country}</p>
            <p className="text-sm text-[#1b6b12] font-semibold mt-1">
              {job.Salary}
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          action="https://formsubmit.co/da8df489f587737b7c1d54a0e94773b2"
          method="POST"
          encType="multipart/form-data"
          className="p-6 space-y-5"
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_subject"
            value={`Job Application: ${job.Title} - ${job.Country}`}
          />
          <input
            type="hidden"
            name="_next"
            value="https://connecteurope.uk/thank-you"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value={`Thank you for applying for the ${job.Title} position at Connect Europe. We have received your application.`}
          />

          {/* Job details */}
          <input type="hidden" name="Job Title" value={job.Title} />
          <input type="hidden" name="Country" value={job.Country} />
          <input type="hidden" name="Industry" value={job.Industry} />
          <input type="hidden" name="Salary" value={job.Salary} />
          <input type="hidden" name="Job Type" value={job.JobType} />
          <input type="hidden" name="Experience" value={job.Experience} />

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1b6b12]"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1b6b12]"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="Phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1b6b12]"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Letter *
            </label>
            <textarea
              name="Cover Letter"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1b6b12]"
              placeholder="Why are you a good fit for this job?"
            />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload CV / Resume *
            </label>
            <input
              type="file"
              name="CV"
              required
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-green-50 file:text-[#1b6b12]"
            />
            <p className="text-xs text-gray-500 mt-2">
              PDF, DOC, DOCX, JPG, PNG — max 5MB
            </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#1b6b12] text-white py-3 px-4 rounded-xl hover:bg-[#155a0d] font-semibold shadow-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SharePopup: React.FC<{
  job: Job;
  onClose: () => void;
}> = ({ job, onClose }) => {
  const shareUrl = window.location.href;
  const shareText = `Check out this ${job.Title} position at ${job.Industry} in ${job.Country} - ${job.Salary} monthly`;

  const sharePlatforms = [
    {
      name: "Facebook",
      icon: "📘",
      color: "bg-blue-500 hover:bg-blue-600",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl,
      )}`,
    },
    {
      name: "Twitter",
      icon: "🐦",
      color: "bg-sky-400 hover:bg-sky-500",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText,
      )}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      color: "bg-blue-600 hover:bg-blue-700",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl,
      )}`,
    },
    {
      name: "WhatsApp",
      icon: "💚",
      color: "bg-green-500 hover:bg-green-600",
      url: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl,
      )}`,
    },
    {
      name: "Email",
      icon: "📧",
      color: "bg-gray-600 hover:bg-gray-700",
      url: `mailto:?subject=Job Opportunity: ${
        job.Title
      }&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
    },
  ];

  const handleShare = (url: string) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#002a64]">
              Share This Job
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Share this amazing opportunity with your network
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {sharePlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleShare(platform.url)}
                className={`flex items-center justify-center space-x-2 p-4 text-white rounded-xl transition-all duration-300 transform hover:scale-105 ${platform.color} shadow-lg hover:shadow-xl`}
              >
                <span className="text-xl">{platform.icon}</span>
                <span className="font-semibold">{platform.name}</span>
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Or copy job link
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-sm bg-gray-50 font-medium"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert("Link copied to clipboard!");
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors text-sm font-semibold"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareIcon = () => (
  <svg
    className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

const getCountryCode = (countryName: string): string => {
  const countryMap: { [key: string]: string } = {
    Albania: "AL",
    Andorra: "AD",
    Armenia: "AM",
    Austria: "AT",
    Azerbaijan: "AZ",
    Belarus: "BY",
    Belgium: "BE",
    Bosnia_and_Herzegovina: "BA",
    Bulgaria: "BG",
    Croatia: "HR",
    Cyprus: "CY",
    Czech_Republic: "CZ",
    Denmark: "DK",
    Estonia: "EE",
    Finland: "FI",
    France: "FR",
    Georgia: "GE",
    Germany: "DE",
    Greece: "GR",
    Hungary: "HU",
    Iceland: "IS",
    Ireland: "IE",
    Italy: "IT",
    Kazakhstan: "KZ",
    Kosovo: "XK",
    Latvia: "LV",
    Liechtenstein: "LI",
    Lithuania: "LT",
    Luxembourg: "LU",
    Malta: "MT",
    Moldova: "MD",
    Monaco: "MC",
    Montenegro: "ME",
    Netherlands: "NL",
    North_Macedonia: "MK",
    Norway: "NO",
    Poland: "PL",
    Portugal: "PT",
    Romania: "RO",
    Russia: "RU",
    San_Marino: "SM",
    Serbia: "RS",
    Slovakia: "SK",
    Slovenia: "SI",
    Spain: "ES",
    Sweden: "SE",
    Switzerland: "CH",
    Turkey: "TR",
    Ukraine: "UA",
    United_Kingdom: "GB",
    Vatican_City: "VA",

    Afghanistan: "AF",
    Armenia_: "AM",
    Azerbaijan_: "AZ",
    Bahrain: "BH",
    Bangladesh: "BD",
    Bhutan: "BT",
    Brunei: "BN",
    Cambodia: "KH",
    China: "CN",
    Cyprus_: "CY",
    Georgia_: "GE",
    India: "IN",
    Indonesia: "ID",
    Iran: "IR",
    Iraq: "IQ",
    Israel: "IL",
    Japan: "JP",
    Jordan: "JO",
    Kazakhstan_: "KZ",
    Kuwait: "KW",
    Kyrgyzstan: "KG",
    Laos: "LA",
    Lebanon: "LB",
    Malaysia: "MY",
    Maldives: "MV",
    Mongolia: "MN",
    Myanmar: "MM",
    Nepal: "NP",
    North_Korea: "KP",
    Oman: "OM",
    Pakistan: "PK",
    Palestine: "PS",
    Philippines: "PH",
    Qatar: "QA",
    Saudi_Arabia: "SA",
    Singapore: "SG",
    South_Korea: "KR",
    Sri_Lanka: "LK",
    Syria: "SY",
    Taiwan: "TW",
    Tajikistan: "TJ",
    Thailand: "TH",
    Timor_Leste: "TL",
    Turkmenistan: "TM",
    United_Arab_Emirates: "AE",
    Uzbekistan: "UZ",
    Vietnam: "VN",
    Yemen: "YE",

    USA: "US",
    Canada: "CA",
    Australia: "AU",
    New_Zealand: "NZ",
    Brazil: "BR",
    Mexico: "MX",
    Egypt: "EG",
    Nigeria: "NG",
    Kenya: "KE",
    South_Africa: "ZA",
  };
  return countryMap[countryName] || "US";
};

const sampleData: Job[] = [
  {
    SL_No: 1,
    Date: "2025-11-11T18:00:00.000Z",
    JobCategory: "HandsOn_Jobs",
    Country: "Romania",
    Title: "Electrician",
    Vacancies: 5,
    Industry: "Construction",
    CandidatesOrigin: "Any Nationality",
    Description:
      "Installs and maintains electrical wiring and systems safely. Responsible for troubleshooting electrical issues and ensuring all work meets safety standards and regulations.",
    JobType: "Full-time",
    Shift: "Day Shift",
    Gender: "Male",
    Salary: "€700–€900",
    Experience: "1-2 Years",
    Requirements:
      "Need to sit Interview, Electrical certification required, Basic tools provided",
    Status: "Active",
  },
  {
    SL_No: 2,
    Date: "2025-11-10T18:00:00.000Z",
    JobCategory: "HandsOn_Jobs",
    Country: "Serbia",
    Title: "Car Painter",
    Vacancies: 3,
    Industry: "Automotive",
    CandidatesOrigin: "European Countries",
    Description:
      "Prepares and paints car surfaces with precision. Works with various painting techniques and ensures high-quality finish on automotive surfaces.",
    JobType: "Full-time",
    Shift: "Day Shift",
    Gender: "Male",
    Salary: "€500–€750",
    Experience: "1-2 Years",
    Requirements:
      "Need Work Video, Portfolio of previous work, Knowledge of paint mixing",
    Status: "Active",
  },
];
