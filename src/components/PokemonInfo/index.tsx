import React from "react";

import HeartLike from "../../../public/heart-like.svg";
import HeartDislike from "../../../public/heart-dislike.svg";

import {
  Pokemon,
  Card,
  StyledImage,
  Info,
  NationalNumberText,
  PokemonName,
  PokemonType,
  Animation,
} from "./styles";

import { usePokemonData } from "../../context/pokemonData";

type PokemonInfoProps = {
  onClick?: () => void;
  selected: boolean;
  name: string;
  national_number: string;
  sprites: {
    large: string;
    normal: string;
  };
  type: string[];
};

const index = ({ onClick, selected, ...pokemon }: PokemonInfoProps) => {
  const { colors } = usePokemonData();

  const { name, national_number, sprites, type } = pokemon;

  return (
    <Pokemon>
      <Card onClick={onClick}>
        <StyledImage
          width={128}
          height={128}
          src={sprites.large}
          alt={name}
          quality={100}
        />

        <Animation selected={selected}>
          {selected ? (
            <img src={HeartLike.src} alt="Like" />
          ) : (
            <img src={HeartDislike.src} alt="Dislike" />
          )}
        </Animation>
      </Card>

      <Info>
        <NationalNumberText>N°{national_number}</NationalNumberText>
        <PokemonName>{name}</PokemonName>
        {type.map((type, index) => {
          if (!colors) return;

          const bgColor = colors[type.toLocaleLowerCase()];
          return (
            <PokemonType key={index} bg={bgColor}>
              {type}
            </PokemonType>
          );
        })}
      </Info>
    </Pokemon>
  );
};

export default index;
