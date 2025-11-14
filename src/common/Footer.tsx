import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-primary w-full py-20 h-20 flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-[40px] text-center font-bold text-white font-sans">
          Connect Europe
        </h1>
        <p className="text-white text-center text-[20px] font-sans">
          We are here for you
        </p>
        <div className="max-w-7xl w-full border-t border-white pt-5 mx-auto flex items-center justify-between">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <p className="text-white text-[20px] font-sans">
            Copyright @ 2025 Connect Europe
          </p>
        </div>
      </div>
    </footer>
  );
}
