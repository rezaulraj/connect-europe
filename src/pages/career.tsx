import HeroCareer from "@/components/career/HeroCareer";
import JobSection from "@/components/career/JobSection";
import Layout from "@/components/Layout";
import React from "react";

export default function career() {
  return (
    <Layout>
      <HeroCareer />
      <JobSection />
    </Layout>
  );
}
