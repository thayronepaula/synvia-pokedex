import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;

export const TitleSelect = styled.span`
  color: #656565;
  font-size: 12px;
  font-family: "Titillium Web", sans-serif;
`;
export const Select = styled.select`
  width: 184px;

  text-indent: 10px;
  height: 38px;
  color: #e2350d;
  font-size: 12px;
  font-family: "Titillium Web", sans-serif;
  border: 1px solid #e2350d;

  border-radius: 30px;

  option {
    width: 100%;
    color: #121212;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
