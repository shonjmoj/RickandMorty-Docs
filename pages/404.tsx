import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-4xl md:text-5xl lg:text-7xl font-bold flex flex-col justify-center items-center min-h-screen">
      <Image
        alt="404"
        height={400}
        width={400}
        src={
          "/images/30-Rick-And-Morty-Clipart-black-and-white-Free-Clip-Art--removebg-preview.png"
        }
      />
      <h1>404 - Page not found</h1>
    </div>
  );
}
