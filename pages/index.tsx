import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center text-center">
      <div className="w-72 md:w-96 select-none mb-3">
        <Image
          src="/images/RM-removebg.png"
          alt="banner"
          width={400}
          height={400}
          layout={"intrinsic"}
          priority
        />
      </div>
      <h1 className="text-4xl xl:text-6xl font-normal text-zinc-800">
        Welcome to{" "}
        <span className="font-bold text-zinc-900">Rick and Morty</span> docs.
      </h1>
    </div>
  );
};

export default Home;
