import Image from "next/image";
import React from "react";

export default function HeroCareer() {
  return (
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
            <button className="bg-heading text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#003d85] transition cursor-pointer uppercase">
              Find Open Position
            </button>
            <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition uppercase cursor-pointer">
              Enrole for feture Jobs
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
  );
}
