import HeroBanner from "@/common/HeroBanner";
import HrService from "@/components/GethrAdvicePages/HrService";
import Layout from "@/components/Layout";
import React from "react";

export default function gethradvice() {
  return (
    <Layout>
      <HeroBanner title=" I need HR advice" desc="we find top candidates" />
      <HrService />
    </Layout>
  );
}
