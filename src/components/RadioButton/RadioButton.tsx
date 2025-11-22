import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.div`
  gap: 10px;
  margin: auto;
`;

const StyledRadio = styled.input<{ disabled?: boolean }>`
  margin: auto;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  disabled,
  label,
}) => {
  return (
    <StyledRadioButton>
      {label && <span>{label}</span>} {/* ✅ add label here */}
      <div>
        {options.map((opt) => (
          <label key={opt} style={{ marginRight: "10px" }}>
            <StyledRadio
              type="radio"
              name={name}
              value={opt}
              disabled={disabled}
            />
            {opt}
          </label>
        ))}
      </div>
    </StyledRadioButton>
  );
};

export default RadioButton;
