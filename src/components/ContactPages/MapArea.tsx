import AboutBanner from "@/common/AboutBanner";
import React from "react";

export default function MapArea() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-5 ">
          <div className="w-full h-[400px] my-10">
            <span className="text-[24px] text-primary font-bold font-sans mb-5">
              United Kingdom
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1744745907927!2d-0.016195106632005574!3d51.528359636514075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d5ad7c224d7%3A0x326bb242c5c2b2d7!2s5%20Bolinder%20Wy.%2C%20London%20E3%203UH%2C%20UK!5e0!3m2!1sen!2sbd!4v1753268055781!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="w-full h-[400px] my-10">
            <span className="text-[24px] text-primary font-bold font-sans mb-5">
              Dubai
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0447151252615!2d55.3676525!3d25.3027017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c61f00f092b%3A0x7e0bf2fd49ef13d5!2sAl%20Ittihad%20St%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1753515008457!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="w-full h-[400px] my-10">
            <span className="text-[24px] text-primary font-bold font-sans mb-5">
              Dhaka
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14600.308775782782!2d90.3569935!3d23.8158539!3m2!1i1024!2i768!4f13.1!2m1!1sBlock%20B%20House%20%235%20Road%202%20Dhaka%201216%20Mirpur%2010!5e0!3m2!1sen!2sbd!4v1753515146129!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <AboutBanner
          image="/card1.webp"
          title=" Top Talent, On Demand"
          subtitle="10 Years of Impact Across Europe"
          desc="Expertise is the fundamental pillar on which our company stands and also what our partners can rely on 100%. Expertise is what we pride ourselves on and continually develop in our consultants."
        />
      </div>
    </section>
  );
}
