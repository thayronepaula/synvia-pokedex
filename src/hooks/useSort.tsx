import { PokemonResults } from "../types";

const awesomeSortAsc = (key: string, array?: PokemonResults[]) => {
  array?.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }

    if (a[key] > b[key]) {
      return 1;
    }

    return 0;
  });
};

const awesomeSortDesc = (key: string, array?: PokemonResults[]) => {
  array?.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }

    if (a[key] < b[key]) {
      return 1;
    }

    return 0;
  });
};

export  { awesomeSortAsc, awesomeSortDesc };
