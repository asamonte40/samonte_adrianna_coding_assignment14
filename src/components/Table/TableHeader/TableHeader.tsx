import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledThead = styled.thead<{ disabled?: boolean }>`
  background-color: #f2f2f2;
  text-align: left;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  th {
    padding: 16px 20px;
    border-bottom: 2px solid #ccc;
    font-weight: bold;
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
  return <StyledThead disabled={disabled}>{children}</StyledThead>;
};

export default TableHeader;
