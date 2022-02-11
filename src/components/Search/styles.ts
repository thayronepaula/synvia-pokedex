import styled from "styled-components";

export const InputContainer = styled.form`
  position: relative;

  max-width: 584px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 30px;
  padding: 0 18px;

  font-size: 14px;

  background: #f2f2f2;
  outline: none;
  border: none;

  font-family: "Titillium Web", sans-serif;

  ::placeholder {
    color: #9e9e9e;
  }
`;

export const IconPosition = styled.div`
  position: absolute;
  top: 23px;
  right: 16px;

  transform: translate(-50%,-50%);
  z-index: 999;

  
`;
