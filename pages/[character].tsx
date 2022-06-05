import { GetStaticPaths, GetStaticProps } from "next";
import { Props } from "../types/types";

let allData: Props;
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { character } = params;
  for (let page = 1; page <= 11; page++) {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => data.results);
    data.result.push(...data);
  }
  return {
    props: {
      allData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = allData.result.map((character) => {
    params: {
      character: character.name;
    }
  });

  return {
    paths,
  };
};
