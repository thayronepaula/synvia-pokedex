import React from "react";
import Image from "next/image";

import { Container, Title, TypeList, TypePokemon } from "./styles";

import { useTypePokemonData } from "../../context/filterType";

import CheckIcon from "../../../public/check.svg";

const types = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

const index = () => {
  const { typesPokemons, onToggleArray } = useTypePokemonData();
  return (
    <Container>
      <Title>Filtrar por tipo</Title>

      <TypeList>
        {types.map((item) => {
          const activeFilter = typesPokemons?.includes(item);

          return (
            <TypePokemon
              key={item}
              active={activeFilter}
              onClick={() => onToggleArray(item)}
            >
              {item}
              {activeFilter && (
                <Image
                  width={14}
                  height={14}
                  src={CheckIcon.src}
                  alt="icon check"
                />
              )}
            </TypePokemon>
          );
        })}
      </TypeList>
      <Title>Filtrar por tipo</Title>
    </Container>
  );
};

export default index;
