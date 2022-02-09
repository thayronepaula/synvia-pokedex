import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  width: 100%;
  font-size: 14px;
  color: #4c4c4c;
`;

export const TypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap:5px;


  max-width: 140px;
`;

export const TypePokemon = styled.li`
  display: flex;
  background-color: #fff;
  font-size: 12px;



  padding: 5px 12px;

  cursor: pointer;
  border: 1px solid red;

  border-radius: 20px;
`;
