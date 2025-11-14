import HeroBanner from "@/common/HeroBanner";
import Layout from "@/components/Layout";
import BannerCount from "@/components/ReferencePages/BannerCount";
import BrandAds from "@/components/ReferencePages/BrandAds";
import TestimonialSection from "@/components/ReferencePages/TestimonialSection";
import React from "react";

export default function reference() {
  return (
    <Layout>
      <HeroBanner
        title="References"
        desc="our results speak for themselves"
        btn
      />
      <BannerCount />
      <TestimonialSection />
      <BrandAds />
    </Layout>
  );
}
