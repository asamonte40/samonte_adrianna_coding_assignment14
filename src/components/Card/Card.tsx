import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{
  disabled?: boolean;
  color?: string;
  width?: string;
}>`
  width: ${({ width }) => width || "500px"};
  position: relative;
  margin: -60px auto 0;
  border-radius: 18px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.18);
  border: 1px solid #ddd;
  background-color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Card: React.FC<CardProps> = ({ children, disabled, color, width }) => {
  return (
    <StyledCard disabled={disabled} color={color} width={width}>
      {children}
    </StyledCard>
  );
};

export default Card;
