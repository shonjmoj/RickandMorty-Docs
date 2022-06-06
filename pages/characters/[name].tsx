import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCharacters } from "../../context/characterContext";
import { Characters } from "../../types/types";
import { myLoader } from "../../utils/utils";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import DefaultErrorPage from "next/error";
import NotFound from "../404";

function Character() {
  const router = useRouter();
  const characters = useCharacters();
  const [state, setState] = useState<Characters | undefined>(() =>
    characters.find(
      (chara) =>
        chara.name?.replace(" ", "_").toLowerCase() === router.query.name
    )
  );
  console.log(characters);
  if (state === undefined) return <NotFound />;

  return (
    <div className="flex container min-h-screen justify-center items-center mx-auto">
      <div className="flex flex-col md:flex-row-reverse  border-[1px] border-zinc-900 p-3 shadow-md gap-2">
        <div className="select-none w-max">
          <Image
            width={400}
            height={400}
            src={state.image}
            alt={state.name}
            loader={() => myLoader({ src: state.image })}
            layout="intrinsic"
            priority={true}
          />
        </div>
        <div className="flex md:flex-col md:items-start md:p-1 md:mr-5 justify-between items-center">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-bold">{state.name}</h1>
            <h2 className="font-light md:text-lg">{state.location?.name}</h2>
            <h1 className="text-lg md:text-xl">{state.species}</h1>
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
  );
}

export default Character;
