import Banner from "@/common/Banner";
import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import Brand from "@/components/HomePages/Brand";
import Hero from "@/components/HomePages/Hero";
import Industry from "@/components/HomePages/Industry";
import Service from "@/components/HomePages/Services";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
      <Hero />
      <Banner />
      {/* <Patner /> */}
      <Industry />
      <Service />
      <Brand />
      <Footer />
    </div>
  );
}
