import React from "react";
import { SwitchInput, SwitchLabel, SwitchButton } from "./styles";

type SwitchProps = {
  id: string;
  toggled: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Switch = ({ id, toggled, onChange }: SwitchProps) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
};

export default Switch;
