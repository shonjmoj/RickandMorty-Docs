import { GetStaticProps } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface Character {
  _id?: number;
  name?: string;
  status?: string;
  species?: string;
  image?: string;
  location?: {
    name?: string;
  };
  origin?: {
    name?: string;
  };
}

export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>();
  const [page, setPage] = useState(1);

  const myLoader = ({ src }: { src: string }) => {
    return `${src}`;
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        console.log(data.results);
      });
  }, [page]);

  const getNextPage = (page: number) => {
    setPage(page + 1);
  };
  const getPrevPage = (page: number) => {
    if (page === 1) return;
    setPage(page - 1);
  };
  return (
    <div className="container max-w-[90%] xl:max-w-[70%] broder-black mx-auto lg:flex lg:flex-col items-center my-5">
      <form className="lg:w-[60%] w-[100%] relative">
        <input
          type="text"
          placeholder="looking for a caracter ?"
          className="w-full h-10 lg:h-12 px-3 lg:px-5 outline-none bg-gray-200 rounded-md"
        />
        <button type="submit">
          <BiSearchAlt className="absolute right-2 top-2 lg:top-3 w-6 h-6" />
        </button>
      </form>
      <div className="flex mt-5 justify-between text-gray-50 lg:w-[70%]">
        <button
          onClick={() => getPrevPage(page)}
          className="bg-zinc-900 px-2 py-1 lg:px-3 lg:py-2 rounded-md hover:bg-zinc-800 transition-all duration-100"
        >
          &larr; Prev
        </button>
        <button
          onClick={() => getNextPage(page)}
          className="bg-zinc-900 px-2 py-1 lg:px-3 lg:py-2 rounded-md hover:bg-zinc-800 transition-all duration-100"
        >
          Next &rarr;
        </button>
      </div>
      <div className="max-w-[100%] lg:max-w-[70%] flex mt-6 lg:mt-10">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {characters &&
            characters.map((character, index) => (
              <li
                className="text-base lg:text-lg font-semibold border-[1px] border-zinc-900 p-2 xl:p-3"
                key={index}
              >
                <div className="flex flex-col">
                  <Image
                    loader={myLoader}
                    src={character.image!}
                    alt={character.name}
                    width={20}
                    height={20}
                    layout={"responsive"}
                  />
                  <div className="my-2">
                    <h1>{character.name}</h1>
                    <h3 className="font-light text-sm">
                      {character.location?.name}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
