export interface Characters {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  image: string;
  location?: {
    name?: string;
  };
  origin?: {
    name?: string;
  };
}

export type Props = {
  result: Characters[];
};
