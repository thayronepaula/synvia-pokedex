import styled from "styled-components";

export const PokemonGrid = styled.ul`
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(188px, 1fr));
  
  row-gap:32px;

  flex: 1;
  overflow-y: auto;

  max-height: 580px;

  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #E90200;
  }
`;

export const Main = styled.main`
  max-width: 1204px;
  margin: 0 auto;
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
