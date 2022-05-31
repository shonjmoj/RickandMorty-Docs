import React, { useEffect, useState } from "react";

interface Episode {
  _id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
}

export default function Episodes() {
  const [episodes, setEpisodes] = useState<Episode[]>();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);
  return (
    <div className="container max-w-[90%] xl:max-w-[70%] broder-black mx-auto lg:flex lg:flex-col my-5">
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {episodes &&
          episodes.map((episode) => (
            <li key={episode._id}>
              <div className="border-[1px] border-zinc-900 p-3 lg:p-4">
                <h1 className="font-bold text-sm lg:text-xl">{episode.name}</h1>
                <h3 className="font-light text-xs lg:text-sm">
                  {episode.air_date}
                </h3>
                <h1 className="font-normal text-sm lg:text-lg mt-1 lg:mt-2">
                  {episode.episode}
                </h1>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
