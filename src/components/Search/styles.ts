import styled from "styled-components";

export const InputContainer = styled.form`
  max-width: 584px;
  position: relative;

  flex: 1;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 30px;
  padding: 0 44px 0 18px;

  font-size: 14px;

  background: #f2f2f2;
  outline: none;
  border: none;

  font-family: "Titillium Web", sans-serif;

  ::placeholder {
    color: #9e9e9e;
  }

  @media (max-width: 640px) {
    font-size:15px;
  }
`;

export const IconPosition = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  cursor: pointer;
  background: none;
  border: none;
  top: 23px;
  right: 10px;

  transform: translate(-50%, -50%);
  z-index: 999;

  @media (max-width: 640px) {
    top: 23px;
    right: 2.5px;
  }
`;
