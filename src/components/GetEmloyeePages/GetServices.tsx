"use client";
import React from "react";
import ServiceSection from "@/common/ServiceSection";

import StepsSection from "./StepsSection";

import AboutBanner from "@/common/AboutBanner";

export default function GetServices() {
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
    <section className="bg-white py-10 px-5">
      <div className="container max-w-7xl mx-auto">
        <ul className="flex justify-center space-x-10">
          <li className="text-[22px] text-primary hover:underline cursor-pointer">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => smothScroll("Recruiting", 1000)}>
              Recruiting
            </button>
          </li>
          <li className="text-[22px] text-primary hover:underline cursor-pointer">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => smothScroll("Headhunting", 1000)}>
              Headhunting
            </button>
          </li>
          <li className="text-[22px] text-primary ">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => smothScroll("Interim", 1000)}>
              Interim
            </button>
          </li>
        </ul>
      </div>
      <div className="container  mx-auto">
        <ServiceSection
          id="Recruiting"
          title="Professional Recruitment"
          subtitle="Service"
          imageSrc="/images/service1.jpg"
          reverse // ⬅️ Image on the right
          paragraphs={[
            "We take the stress out of hiring by delivering qualified candidates for key positions without wasting your time.",
            "Our recruitment process is tailored to match your business needs. We begin by understanding your role requirements, ideal qualifications, and the skills you’re looking for. Then, using our wide-reaching network and advanced sourcing strategies, we identify and assess the most suitable professionals.",
            "Each candidate is carefully screened not just for experience, but for cultural fit, motivation, and long-term value. You’ll receive a curated shortlist with detailed profiles and clear recommendations to support your hiring decisions.",
          ]}
        />
        <StepsSection />
        <ServiceSection
          id="Headhunting"
          title="Strategic Talent Search"
          subtitle="Service"
          imageSrc="/images/service2.jpg"
          paragraphs={[
            "When traditional recruitment isn’t enough, our executive search service delivers. We identify and approach high-calibre professionals who aren’t actively job-hunting but are open to the right opportunity.",
            "Our experienced headhunters use a confidential, research-based process to locate top-tier candidates with the leadership, expertise, and cultural fit of your business needs. We understand your company’s structure, values, and vision then we connect you with proven professionals who can make a difference from day one.",
            "We offer a discreet and tailored recruitment process, giving you exclusive access to top-tier passive candidates who aren’t actively job-hunting. With our performance-based model, you only pay when we successfully place the right talent ensuring a risk-free, results-driven experience tailored to your business needs.",
            "Let’s help you hire your next game-changer.",
          ]}
        />
        <ServiceSection
          id="Interim"
          title="Interim Management"
          subtitle="Service"
          imageSrc="/images/service3.jpg"
          reverse //
          paragraphs={[
            "Need an experienced leader to manage a transition, project, or crisis? Our interim managers step in fast with the skills and authority to drive results from day one.",
            "Each professional we place brings years of hands-on leadership across industries. Whether it’s for a few weeks or several months, we’ll match you with a senior expert who aligns with your company goals and gets the job done.",
            "We’ll provide a senior expert who aligns seamlessly with your business goals and delivers swift, measurable impact. With no need for onboarding, they hit the ground running making an immediate difference from day one. Whether you need support for a short-term project or a longer engagement, our flexible approach ensures you get the right expertise, exactly when and where you need it. You can count on proven professionals who perform reliably, even under the most demanding conditions.",
          ]}
        />
      </div>
      <AboutBanner
        image="/card1.webp"
        title="Meet Our Experts"
        subtitle="Skilled Consultants. Real Solutions."
        desc="At Connect Europe, our consultants are industry-savvy problem solvers who blend HR expertise with hands-on experience to deliver impactful results."
      />
    </section>
  );
}
