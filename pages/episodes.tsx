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
    <div className="container max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] broder-black mx-auto my-5">
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
        {episodes &&
          episodes.map((episode) => (
            <li key={episode._id}>
              <div className="border-[1px] border-zinc-900 w-44 h-28 xl:w-44 xl:h-40 2xl:w-60 2xl:h-52 flex items-center px-2 lg:px-4 group hover:bg-zinc-900 hover:text-gray-50 transition-all ease-in-out duration-200">
                <div>
                  <h1 className="font-bold text-sm lg:text-xl">
                    {episode.name}
                  </h1>
                  <h3 className="font-light text-xs lg:text-sm ">
                    {episode.air_date}
                  </h3>
                  <h1 className="font-semibold text-base lg:text-xl hidden group-hover:block mt-5 xl:mt-8">
                    {episode.episode}
                  </h1>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
