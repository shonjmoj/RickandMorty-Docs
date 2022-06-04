import Image from "next/image";
import React from "react";

export default function CharacterNotFound() {
  return (
    <div className="w-[50%] rounded-full flex flex-col items-center justify-center text-lg md:text-2xl font-bold gap-2 my-10 lg:my-16">
      <Image
        src="/images/how-to-draw-rick-and-morty-step-8_5e4ce50ef05f67.24124220_115660_5_3-removebg-preview.png"
        alt="Not Found"
        width={200}
        height={200}
      />
      <h1>Character not found !</h1>
    </div>
  );
}
