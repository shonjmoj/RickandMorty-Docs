import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import { Characters, Props } from "../types/types";

const CharactersContext = createContext<Characters[]>([]);

export const CharactersProvider = (props: any) => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let result: Characters[] = [];

    for (let page = 1; page <= 11; page++) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((data) => data.json())
        .then((final) => {
          result.push(...final.results);

          if (page === 11) {
            setCharacters(result);
            setLoading(false);
          }
        });
    }
  }, []);

  if (loading === true)
    return (
      <div className="mx-auto container min-h-screen flex items-center justify-center">
        <Image
          height={60}
          width={60}
          src="/images/Circles-menu-3-unscreen.gif"
          alt="loading"
          priority={true}
        />
      </div>
    );

  return (
    <CharactersContext.Provider value={characters}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  return useContext(CharactersContext);
};
