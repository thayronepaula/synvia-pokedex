import React from "react";
import {
  Pokemon,
  Card,
  StyledImage,
  Info,
  NationalNumberText,
  PokemonName,
  PokemonType,
} from "./styles";

import useAxios from "../../hooks/useAxios";

import { Colors, PokemonResponse } from "../../types";

const index = () => {
  const [pokemon, setPokemon] = React.useState<PokemonResponse | null>(null);

  const { data:colors } = useAxios<Colors>("/api/typecolors");

  React.useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
      );
      const json = await response.json();

   

      setPokemon(json);
    };
    getPokemons();
  }, []);
  const exemple = pokemon?.results.slice(0,15);


  return (
    <Pokemon>
      {exemple?.map(({ name, national_number, sprites, type }) => (
        <>
          <Card key={name + index}>
            <StyledImage
              width={128}
              height={128}
              src={sprites.large}
              alt={name}
              quality={100}
            />
          </Card>

          <Info>
            <NationalNumberText>N°{national_number}</NationalNumberText>
            <PokemonName>{name}</PokemonName>

            {type.map((type, index) => {
              if (!colors) return;
      
              const bgColor = colors[type.toLocaleLowerCase()]
              return (
                <PokemonType key={index} bg={bgColor}>
                  {type}
                </PokemonType>
              );
            })}
          </Info>
        </>
      ))}
    </Pokemon>
  );
};

export default index;
