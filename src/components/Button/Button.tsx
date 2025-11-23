import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled?: boolean; color?: string }>`
  padding: 8px 16px; /* smaller */
  border: none;
  border-radius: 8px;
  font-size: 1.2rem; /* smaller than 2rem */
  background-color: ${({ color }) => color || "#a0826d"};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: 0.3s;
  width: 100%;
  max-width: 150px;
`;

const Button: React.FC<ButtonProps> = ({
  label = "Click Me",
  disabled,
  color,
  onClick,
  style,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      color={color}
      onClick={!disabled ? onClick : undefined} // prevent clicks if disabled
      style={style}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
