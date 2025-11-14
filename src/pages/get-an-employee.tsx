import HeroBanner from "@/common/HeroBanner";
import GetServices from "@/components/GetEmloyeePages/GetServices";
import Layout from "@/components/Layout";
import React from "react";

export default function getanemployee() {
  return (
    <Layout>
      <HeroBanner
        title="Need an Employee?"
        desc="We connect you with top candidates  fast, reliable, and tailored to your needs."
      />
      <GetServices />
    </Layout>
  );
}
