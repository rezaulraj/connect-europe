import AboutHero from "@/components/AboutPages/AboutHero";
import OurStory from "@/components/AboutPages/OurStory";
import Ourway from "@/components/AboutPages/Ourway";
import Layout from "@/components/Layout";
import React from "react";

export default function about() {
  return (
    <Layout>
      <AboutHero />
      <OurStory />
      <Ourway />
    </Layout>
  );
}
