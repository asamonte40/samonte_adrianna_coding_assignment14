import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 200px;
  background-color: ${({ disabled }) => (disabled ? "#eee" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  disabled,
  onChange,
  style,
}) => {
  return (
    <label>
      {label}{" "}
      <StyledSelect
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        style={style}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </StyledSelect>
    </label>
  );
};

export default Dropdown;
