import styled from "styled-components";

export const PokemonGrid = styled.ul`
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
  gap: 32px;
`;


