import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean; color?: string }>`
  width: 500px;
  padding: 20px;
  margin: auto;
  border-radius: 12px;
  border: 1px solid #ddd;
  background-color: pink;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Card: React.FC<CardProps> = ({ children, disabled, color }) => {
  return (
    <StyledCard disabled={disabled} color={color}>
      {children}
    </StyledCard>
  );
};

export default Card;
