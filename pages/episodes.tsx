import React, { useEffect, useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

interface Episode {
  _id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
}

export default function Episodes() {
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [season, setSeason] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${season}`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, [season]);

  const nextSeason = () => {
    if (season === 3) return;
    setSeason(season + 1);
  };

  const prevSeason = () => {
    if (season === 1) return;
    setSeason(season - 1);
  };

  console.log(episodes);

  return (
    <div className="container max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] broder-black mx-auto my-5">
      <div className="flex justify-center items-center gap-4 my-12">
        <button onClick={() => prevSeason()}>
          <IoMdArrowDropleft size={40} />
        </button>
        <h1 className="text-4xl lg:text-7xl font-bold">Season {`${season}`}</h1>
        <button onClick={() => nextSeason()}>
          <IoMdArrowDropright size={40} />
        </button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
        {episodes &&
          episodes.map(
            (episode) =>
              episode.episode?.includes(`S0${season}`) && (
                <li key={episode._id}>
                  <div className="border-[1px] text-center border-zinc-900 w-44 h-28 xl:w-44 xl:h-40 2xl:w-60 2xl:h-52 flex items-center justify-center px-2 lg:px-4 group hover:bg-zinc-900 hover:text-gray-50 transition-all ease-in-out duration-200">
                    <div>
                      <h1 className="font-bold text-sm lg:text-xl group-hover:hidden">
                        {episode.name}
                      </h1>
                      <h3 className="font-light text-xs lg:text-sm group-hover:hidden">
                        {episode.air_date}
                      </h3>
                      <h1 className="font-semibold text-lg lg:text-2xl hidden group-hover:block">
                        {episode.episode}
                      </h1>
                    </div>
                  </div>
                </li>
              )
          )}
      </ul>
    </div>
  );
}
