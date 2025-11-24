import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledRow = styled.tr<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  td {
    padding: 16px 20px;
    border-bottom: 1px solid #ddd;
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled, style }) => {
  return (
    <StyledRow style={style} disabled={disabled}>
      {children}
    </StyledRow>
  );
};

export default TableRow;
