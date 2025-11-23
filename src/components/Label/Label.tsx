import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ color?: string; disabled?: boolean }>`
  display: block;
  font-weight: bold;
  color: ${({ disabled, color }) => (disabled ? "#aaa" : color || "#333")};
  margin-bottom: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const Label: React.FC<LabelProps> = ({
  text = "Label",
  color,
  disabled,
  style,
}) => {
  return (
    <StyledLabel color={color} disabled={disabled} style={style}>
      {text}
    </StyledLabel>
  );
};

export default Label;
