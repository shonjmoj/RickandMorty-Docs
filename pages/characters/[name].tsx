import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCharacters } from "../../context/characterContext";
import { Character } from "../../types/types";
import { myLoader } from "../../utils/utils";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import NotFound from "../404";
import Head from "next/head";
import { IoClose } from "react-icons/io5";

function Character(state: Character) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>RickAndMorty | {state.name}</title>
        <link rel="icon" type="image/png" sizes="any" href="/images/icon.png" />
      </Head>
      <div className="flex container min-h-screen justify-center items-center mx-auto">
        <div className="flex flex-col md:flex-row-reverse  border-[1px] border-zinc-900 p-2 shadow-lg gap-2">
          <div className="select-none">
            {/* <Image
              width={400}
              height={400}
              src={state.image}
              alt={state.name}
              loader={() => myLoader({ src: state.image })}
              layout="intrinsic"
              priority={true}
            /> */}
          </div>
          <div className="flex md:flex-col md:items-start md:gap-4 p-1 md:mr-20 justify-between items-center relative">
            <button
              className="hidden md:block"
              onClick={() => router.push("/characters")}
            >
              <IoClose size={30} />
            </button>
            <div className="">
              <h1 className="text-2xl md:text-4xl font-bold">{state.name}</h1>
              <h2 className="font-light md:text-lg">-{state.location?.name}</h2>
              <h1 className="text-lg md:text-xl">-{state.species}</h1>
              <h2 className="text-lg md:text-xl">
                {state.origin?.name !== "unknown" && state.origin?.name}
              </h2>
            </div>
            {state.gender?.toLowerCase() === "male" ? (
              <BsGenderMale size={30} />
            ) : (
              <BsGenderFemale size={30} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const paths = data.results.map((character: Character) => ({
    params: { name: `${character.name.toLowerCase().replace("", "_")}` },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (character: Character) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${character.name}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Character;
