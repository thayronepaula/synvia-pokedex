import React from "react";
import { Container, Title, TypeList, TypePokemon } from "./styles";

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
  return (
    <Container>
      <Title>Filtrar por tipo</Title>

      <TypeList>
        {types.map((item) => (
          <TypePokemon key={item}>{item}</TypePokemon>
        ))}
      </TypeList>
      <Title>Filtrar por tipo</Title>
    </Container>
  );
};

export default index;
