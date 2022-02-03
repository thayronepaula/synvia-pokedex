export type Colors = {
  bug: string;
  fairy: string;
  ghost: string;
  steel: string;
  ice: string;
  dark: string;
  fighting: string;
  grass: string;
  poison: string;
  water: string;
  flying: string;
  dragon: string;
  fire: string;
  ground: string;
  psychic: string;
  electric: string;
  rock: string;
};

export type PokemonResponse = {
  results: {
    name: string;
    national_number: string;
    sprites: {
      large: string;
      normal: string;
    };
    type: string[];
  }[];
};
