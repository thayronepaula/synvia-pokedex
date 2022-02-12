import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 14px;
  color: #4c4c4c;

  @media (max-width: 850px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const TypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  max-width: 165px;
  margin: 20px 0 40px;

  @media (max-width: 850px) {
    max-width: 100%;
    justify-content: center;

    margin: 15px 0 20px;
  }
`;

type TypePokemonProps = {
  active: boolean;
};

export const TypePokemon = styled.li<TypePokemonProps>`
  display: flex;
  background-color: ${(props) => (props.active ? "#E2350D" : "#fff")};
  font-size: 12px;

  padding: 5px 12px;

  cursor: pointer;
  border: 1px solid #e2350d;

  border-radius: 20px;
  gap: 3px;

  @media (max-width: 850px) {
    padding: 8.75px 21px;

    font-size: 14px;
    font-weight: 600;
  }
`;
