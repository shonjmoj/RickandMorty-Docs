import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center text-center">
      <div className="w-72 md:w-96 bg-transparent select-none mb-3">
        <Image
          src="/images/RM.jpeg"
          alt="banner"
          width={500}
          height={500}
          layout={"responsive"}
        />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal text-zinc-800">
        Welcome to{" "}
        <span className="font-bold text-zinc-900">Rick and Morty</span> docs.
      </h1>
    </div>
  );
};

export default Home;
