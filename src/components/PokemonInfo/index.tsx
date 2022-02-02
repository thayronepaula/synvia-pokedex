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

const index = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
      );
      const json = await response.json();

      console.log(json);

      setData(json);
    };
    getPokemons();
  }, []);
  const exemple = data.results?.slice(0, 1);

  return (
    <Pokemon>
      {exemple?.map((item: any, index: number) => (
        <>
          <Card key={index}>
            <StyledImage
              width={128}
              height={128}
              src={item.sprites.large}
              alt="1"
              quality={100}
            />
          </Card>

          <Info>
            <NationalNumberText>N°{item.national_number}</NationalNumberText>
            <PokemonName>{item.name}</PokemonName>

            {item.type.map((type: any, index: number) => {

              console.log(type)
              return (
                <PokemonType key={index} bg="pink">
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
