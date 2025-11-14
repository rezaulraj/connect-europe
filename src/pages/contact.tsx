import ContactArea from "@/components/ContactPages/ContactArea";
import MapArea from "@/components/ContactPages/MapArea";
import Layout from "@/components/Layout";
import Contact from "@/components/ContactPages/Contact";
import React from "react";

export default function contact() {
  return (
    <Layout>
      <Contact />
      <ContactArea />
      <MapArea />
    </Layout>
  );
}
