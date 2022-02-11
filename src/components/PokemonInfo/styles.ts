import styled from "styled-components";
import Image from "next/image";

type PokemonTypeProps = {
  bg: string;
};

export const Pokemon = styled.div`
  width: 168px;
  font-size: 24px;
  line-height: 1;

  cursor: pointer;
`;

export const Card = styled.div`
  position: relative;
  font-size: 24px;
  height: 168px;
  background: #f2f2f2;
  border-radius: 3px;

  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  mix-blend-mode: multiply;
`;

export const Info = styled.div`
  padding: 8px;
`;

export const NationalNumberText = styled.h6`
  font-weight: normal;
  font-size: 12px;
  color: #bdbdbd;

  margin-top: 12px;
`;

export const PokemonName = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin: 12px 0;
`;
export const PokemonType = styled.span<PokemonTypeProps>`
  font-weight: 600;
  font-size: 12px;

  background: ${({ bg }) => bg};
  height: 28px;
  margin-right: 3px;
  padding: 4px 10px;
  border-radius: 3px;
`;

type AnimationTypeProps = {
  selected: boolean;
};

export const Animation = styled.div<AnimationTypeProps>`
  width: 20px;
  top: 5px;
  right: 5px;
  position: absolute;
  pointer-events: none;
  opacity: 0;

  & img {
    width: 100%;
    object-fit: contain;
  }

  ${({ selected }) =>
    selected &&
    `
    opacity: 1;
  `}

  ${Card}:hover & {
    opacity: 1;
    transition: opacity 0.1s;
  }
`;
