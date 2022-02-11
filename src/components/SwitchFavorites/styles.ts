import styled from "styled-components";
export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  ${SwitchInput}:checked + & {
    background-color: #E2350D ;
  }

  background-color: #E0E0E0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 34px;
  height: 18px;
  border-radius: 100px;
  border: 1px solid transparent;
  position: relative;
  transition: background-color 0.2s;
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 14px;
  height: 14px;
  border-radius: 45px;
  transition: 0.1s;
  background: #F2F2F2;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 20px;
  }
`;
