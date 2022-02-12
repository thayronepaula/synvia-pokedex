import styled from "styled-components";

export const Header = styled.header`
  background: #e2350d;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 1210px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Contain = styled.div`
  display: flex;
  align-items: center;

  gap: 17px;

  @media (max-width: 640px) {
    gap: 8px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;
