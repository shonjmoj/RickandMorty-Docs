import { Characters, Props } from "../types/types";

export const myLoader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}`;
};

export const getPages = (props: Props, Allpages: Characters[][]) => {
  for (let i = 0; i < props.result.length; i += 20) {
    let arr = props.result.slice(i, i + 20);

    Allpages.push(arr);
  }
};
