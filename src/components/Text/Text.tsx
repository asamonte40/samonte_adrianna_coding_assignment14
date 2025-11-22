import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{
  color?: string;
  size?: string;
  disabled?: boolean;
}>`
  color: ${({ disabled, color }) => (disabled ? "#aaa" : color || "#00a91fff")};
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const Text: React.FC<TextProps> = ({
  children = "TEXT",
  color,
  size,
  disabled,
}) => {
  return (
    <StyledText color={color} size={size} disabled={disabled}>
      {children}
    </StyledText>
  );
};

export default Text;
