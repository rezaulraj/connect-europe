// "use client";
// import ServiceSection from "@/common/ServiceSection";
// import React from "react";
// import StepsSection from "../GetEmloyeePages/StepsSection";
// import { useInputModel } from "@/context/ModelContext";
// import AboutBanner from "@/common/AboutBanner";

// export default function RecruitingPages() {
//   const { openModel } = useInputModel();
//   return (
//     <section className="bg-white py-20">
//       <div className="container mx-auto w-7xl">
//         <ServiceSection
//           id="Recruiting"
//           title="Why use the services of a recruitment agency when filling positions"
//           subtitle=""
//           imageSrc="/images/team.jpg"
//           showMoreInfoButton={false}
//           hideButton
//           paragraphs={[
//             "Filling key positions can be time-consuming and costly. Trigon Consulting will save you the time and expense of searching for the right candidates. To ensure we find the best fit for you, we always start by getting to know your company, the role and the team we are looking to fill. Throughout the selection process, you are kept informed and our consultants actively communicate with you. Our recruitment process is designed to ensure you get the best talent for your organisation.",
//             "<strong>How does the recruiting process work?</strong>",
//             "Detailed job analysis: We thoroughly research your needs, including job requirements, qualifications and skills. We are committed to providing you with the most relevant candidate, so we focus on getting to know your company and its specifics, the segment in which you do business, and the team in which the new colleague will be working.",
//           ]}
//         />
//         <ServiceSection
//           id="Recruiting"
//           title="Advantage for you:"
//           subtitle=""
//           imageSrc="/images/Education.jpg"
//           showMoreInfoButton={false}
//           reverse
//           hideButton
//           paragraphs={[
//             "<strong>Getting candidates from different sources:</strong> We use our extensive database of more than 20,000 contacts in the search process. In addition, we have the know-how to reach candidates who do not respond to standard job offers on job portals and social networks. <strong>Interviews and reference checks:</strong> Our consultants will conduct an in-depth review of candidates’ experience, expertise, qualities and motivation. Based on the interview, you will receive a candidate profile with a consultant’s recommendation.",
//             "<strong>Arranging interviews with selected candidates at your place or ours:</strong> We will provide you with a list of the best candidates along with comprehensive profiles and references.",
//             "<strong>Getting feedback on the candidate:</strong> We ensure open and transparent communication throughout the process.",
//             "<strong>Bonus:</strong> We actively communicate with each candidate even after they have joined us to monitor their satisfaction. During the probationary period, we are in contact with the client and find out how they evaluate the progress of our candidate’s adaptation process. If the client is not satisfied with the candidate, we will deliver a new candidate.",
//           ]}
//         />
//         <div className="text-center">
//           <button
//             onClick={openModel}
//             className="border bg-primary  text-white hover:bg-heading hover:text-white hover:border-heading cursor-pointer duration-200 capitalize px-10 py-3 font-semibold rounded font-sans mt-5">
//             I need an employee
//           </button>
//         </div>
//         <StepsSection />
//       </div>
//       <AboutBanner
//         title="Our meetings"
//         desc="Expertise is the fundamental pillar on which our company stands and also what our partners can rely on 100%. Expertise is what we pride ourselves on and continually develop in our consultants.

//         "
//         subtitle=""
//         image="/images/meet.webp"
//       />
//     </section>
//   );
// }
