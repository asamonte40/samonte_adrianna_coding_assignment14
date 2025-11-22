import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RadioOption = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const RadioInput = styled.input`
  margin-right: 6px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  options,
  selected,
  onChange,
  disabled,
}) => {
  return (
    <StyledRadioButton>
      {label && <span>{label}</span>}
      <div style={{ display: "flex" }}>
        {options.map((opt) => (
          <RadioOption key={opt} disabled={disabled}>
            <RadioInput
              type="radio"
              name={name}
              value={opt}
              checked={selected === opt}
              onChange={() => onChange?.(opt)}
              disabled={disabled}
            />
            {opt}
          </RadioOption>
        ))}
      </div>
    </StyledRadioButton>
  );
};

export default RadioButton;
