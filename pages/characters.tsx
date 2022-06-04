import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Characters, Props } from "../types/types";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

export default function HomePage(props: Props) {
  const [paginate, setPaginate] = useState(0);
  const [page, setPage] = useState<Characters[]>(props.result.slice(0, 20));
  let Allpages: any[] = [];

  const myLoader = ({ src }: { src: string }) => {
    return `${src}`;
  };

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  for (let i = 0; i < props.result.length; i += 20) {
    let arr = props.result.slice(i, i + 20);

    Allpages.push(arr);
  }

  const onNext = () => {
    if (paginate + 1 === Allpages.length) return;
    setPage(Allpages[paginate + 1]);
    setPaginate(paginate + 1);
  };

  const onPrevious = () => {
    if (paginate === 0) return;
    setPage(Allpages[paginate - 1]);
    setPaginate(paginate - 1);
  };
  return (
    <>
      <Head>
        <title>RickAndMorty | Characters</title>
        <link rel="icon" type="image/png" sizes="any" href="/images/icon.png" />
      </Head>
      <div className="container max-w-[90%] xl:max-w-[70%] mx-auto flex flex-col items-center my-5">
        <form className="lg:w-[60%] w-[100%] relative" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="looking for a caracter ?"
            className="w-full h-10 lg:h-12 px-3 lg:px-5 outline-none bg-gray-200"
          />
          <button type="submit">
            <BiSearchAlt className="absolute right-2 top-2 lg:top-3 w-6 h-6" />
          </button>
        </form>
        <div className="flex justify-between w-[100%] xl:w-[80%] 2xl:w-[60%] items-center my-4 lg:my-6">
          <button
            className="flex items-center lg:text-lg 2xl:text-xl font-semibold disabled:cursor-not-allowed disabled:opacity-25"
            onClick={onPrevious}
            disabled={paginate === 0 ? true : false}
          >
            <IoMdArrowDropleft size={25} />
            Prev
          </button>
          <button
            className="flex items-center lg:text-lg 2xl:text-xl font-semibold disabled:cursor-not-allowed disabled:opacity-25"
            onClick={onNext}
            disabled={paginate + 1 === Allpages.length ? true : false}
          >
            Next
            <IoMdArrowDropright size={25} />
          </button>
        </div>
        <div className="xl:max-w-[80%] flex">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {props &&
              page.map((character, index) => (
                <li
                  className="text-base lg:text-lg font-semibold border-[1px] border-zinc-900 p-2 xl:p-3 shadow-md hover:shadow-lg hover:cursor-pointer transition-all duration-200"
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
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let result = [];
  for (let page = 1; page <= 11; page++) {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => data.results);
    result.push(...data);
  }
  return {
    props: {
      result,
    },
  };
};
