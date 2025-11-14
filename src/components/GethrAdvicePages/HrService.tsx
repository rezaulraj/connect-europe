"use client";
import AboutBanner from "@/common/AboutBanner";
import ServiceSection from "@/common/ServiceSection";
import React from "react";

export default function HrService() {
  const smothScroll = (id: string, duration = 1000) => {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };
  return (
    <section className="bg-white py-20 px-5">
      <div className="container max-w-7xl mx-auto">
        <ul className="flex flex-nowrap  overflow-x-auto pb-2 space-x-6 px-4 md:flex-wrap md:justify-center md:overflow-x-visible md:space-x-10">
          {[
            { id: "HR-consultancy", label: "Advisory" },
            { id: "Staff-audit", label: "Assessment" },
            { id: "HR-marketing", label: "Branding " },
            { id: "Education", label: "Training" },
            { id: "Succession", label: "Succession" },
            { id: "Salary-survey", label: "Benchmarking" },
          ].map((item) => (
            <li key={item.id} className="flex-shrink-0 md:flex-shrink">
              <button
                className="text-lg md:text-[22px] cursor-pointer text-primary hover:underline whitespace-nowrap"
                onClick={() => smothScroll(item.id, 1000)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto">
        <ServiceSection
          id="HR-consultancy"
          title="Advisory"
          subtitle="Service"
          imageSrc="/images/Advisory.jpg"
          paragraphs={[
            "Empower your organization with strategic HR guidance. At <strong>Connect Europe</strong>, we bring over 10 years of experience in human capital management to help you build smarter, stronger teams.",
            "Our advisory services cover everything from workforce planning and recruitment to talent retention, engagement, and performance management. Each solution is tailored to your business goals ensuring your people strategy drives real results.",
            "Need on-demand support? Our HR outsourcing option gives you access to senior HR expertise without the overhead.",
          ]}
          expandableContent={[
            "Building a team from the ground up is a difficult task. As with all our services, we create a turnkey solution. We use all professional procedures and methodologies sensitively, according to experience and taking into account the current situation.",
          ]}
          showMoreInfoButton={false}
        />
        {/* <StepsSection /> */}
        <ServiceSection
          id="Staff-audit"
          title="Staff audit"
          subtitle="Service"
          imageSrc="/images/Staffaudit.jpg"
          reverse
          paragraphs={[
            "Objective view through human resources audit ‍Human resourcesaudit is an effective and efficient form of collecting valuable information about your employees, which you can then use effectively in the development of your human resources and in the optimization and standardization of processes in your company.",
            "HR audit answers a variety of questions ‍Humanresources are the most valuable resource in your business. Effective use of human resources brings about the development of the company and thus limits the failure of your business because people are not machines. Mapping processes, managing effectively, setting up communication flows, delegating authority and determining responsibilities and accountabilities is a fundamental problem for many organizations, especially as you transition from different stages of your company’s development.",
          ]}
          showMoreInfoButton={false}
          expandableContent={[
            "Staff audit and its process The basis of our professional and personal assessment of the individual participants in the audit. This usually starts with structured face-to-face interviews conducted by our HR consultants, experts in HR auditing. The essence is to solve the specific task and problems characteristic of each job. A dynamic method of personnel audit is the Assessment Centre or Development Centre, where you get qualified feedback on your employees in modelled real-life situations. Take advantage of our many years of experience in getting to know your employees through HR audits and discover their true potential.",
          ]}
        />
        <ServiceSection
          id="HR-marketing"
          title="HR marketing"
          subtitle="Service"
          imageSrc="/images/HRMarketing.jpg"
          paragraphs={[
            "In today’s competitive business environment, attracting and retaining top talent is critical. HR marketing will help bring your brand, culture and values to potential employees, making it easier to attract the right candidates. By using HR marketing, you build a strong brand and a good name on the job market.",
            "HR marketing can help you retain your best employees.",
            "HR marketing is becoming a key component of any successful company. By investing in HR marketing initiatives, you can attract and retain top talent.",
            "We have the recipe for setting up effective HR marketing.",
          ]}
          showMoreInfoButton={false}
        />

        <ServiceSection
          id="Education"
          title="Education"
          subtitle="Service"
          imageSrc="/images/Education.jpg"
          paragraphs={[
            "Unlock the full potential of your team through training. For several years we have been a trusted partner for our clients in the development of communication skills, management skills, sales skills and personal development of their employees.",
            "We specialise in delivering comprehensive and results-focused learning programmes (training) in key areas of professional development. We have a team of experienced trainers who are dedicated to giving your team the skills you need to make your company a long-term success.",
            "Communication Skills – Effective communication is the foundation of any successful organisation today. During our trainings we focus not only on improving communication skills but also active listening, conflict resolution and presentation skills. We provide actionable techniques to help your team communicate openly and clearly, increasing their ability to collaborate, negotiate and build meaningful relationships with clients, colleagues and business partners.",
          ]}
          reverse
          showMoreInfoButton={false}
          expandableContent={[
            "HR training – our portfolio of training activities also includes comprehensive training programmes for HR professionals including recruiters, headhunters, HRBPs and recruiters. Our tailored training covers key areas of HR services such as talent acquisition, recruitment strategies, candidate assessment, headhunting techniques, onboarding and new hire onboarding and internal communications.",
            "Management skills – leadership and management skills are critical to managing team performance and achieving the organization’s goals. Our targeted leadership training focuses on core management competencies such as strategic planning, decision making, team building, performance management and change management. We provide practical tools, frameworks and case studies to help your team develop effective leadership styles and motivate your direct reports, leading to improved team performance and productivity.",
            "Sales skills – in today’s competitive business environment, mastering effective sales techniques is essential for business success. Our training programs focus on building basic sales skills such as prospecting, relationship building, negotiating, objection resolution and closing deals. We provide practical strategies, role-playing exercises and real-life scenarios to hone your team’s sales skills.",
            "In addition to these topics, our consultants provide coaching and personal development services for your employees.",
          ]}
        />
        <ServiceSection
          id="Succession"
          title="Succession"
          subtitle="Service"
          imageSrc="/images/Succession.jpg"
          paragraphs={[
            "Succession planning is one of the most important aspects of a successful business. It is the process of identifying and developing employees with the potential to fill key leadership positions in the company. By identifying and preparing potential successors early, the company can ensure continuity in leadership, mitigating the risk associated with sudden unwanted departures. A succession programme is an investment in the future because it promotes loyalty and commitment among key employees and is a tool to attract new talent to the company.",
            "Based on our years of experience, succession planning should be a top priority for any company that wants to succeed in the long term.",
          ]}
          showMoreInfoButton={false}
        />
        <ServiceSection
          id="Salary-survey"
          title="Salary survey"
          subtitle="Service"
          imageSrc="/images/Salarysurvey.jpg"
          paragraphs={[
            "Our professional services include salary surveys for various positions. If you need to get an overview of how employees are evaluated in a specific position, for example at a competitor, or if you need to set a salary for a new position in your company with which you have no experience, we will provide you with an overview based on our knowledge of the market, our internal data supplemented with data from relevant external sources.",
          ]}
          reverse
          showMoreInfoButton={false}
        />
      </div>
      <AboutBanner
        image="/card1.webp"
        title="Trusted Talent, On Call"
        subtitle="A Decade of Excellence Across Europe"
        desc="Our foundation is built on deep expertise — the very strength our partners trust completely. It's our pride, our passion, and a skill we continuously sharpen across every consultant we work with."
      />
    </section>
  );
}
