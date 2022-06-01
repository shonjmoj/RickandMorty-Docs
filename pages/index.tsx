import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center text-center">
      <div>
        <Image
          src="/images/RM.jpeg"
          alt="banner"
          width={350}
          height={350}
          layout="fixed"
        />
      </div>
      <h1 className="text-4xl lg:text-7xl font-normal text-zinc-800">
        Welcome to{" "}
        <span className="font-bold text-zinc-900">Rick and Morty</span> docs.
      </h1>
    </div>
  );
};

export default Home;
