import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 50%;
  margin: auto;

  border-collapse: collapse;
  border: 1px solid #ddd;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  th,
  td {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  }
`;

const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;
