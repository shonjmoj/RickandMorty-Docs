import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-3xl md:text-4xl lg:text-7xl font-normal flex flex-col justify-center items-center min-h-screen">
      <div className="w-[55%] md:w-[40%] lg:w-[30%] xl:w-[20%]">
        <Image
          alt="404"
          height={100}
          width={100}
          src={
            "/images/30-Rick-And-Morty-Clipart-black-and-white-Free-Clip-Art--removebg-preview.png"
          }
          layout="responsive"
        />
      </div>
      <h1>404 - Page not found</h1>
    </div>
  );
}
