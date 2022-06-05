import { GetStaticPaths, GetStaticProps } from "next";
import { Characters, Props } from "../types/types";

export const getStaticPaths = async () => {
  let result = [];

  for (let page = 1; page <= 11; page++) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data: Props = await res.json();
    result.push(...data.result);
  }

  const paths = result.map((character) => {
    return {
      params: { id: character.id?.toString(), name: character.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default function Details(props: Props) {
  props.result.map((char) => console.log(char.name));
  return <div></div>;
}

export const getStaticProps = async (context: Characters) => {
  const id = context.id;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data: Props = await res.json();
  return {
    props: {
      data,
    },
  };
};
