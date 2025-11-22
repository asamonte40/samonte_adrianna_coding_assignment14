import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledFooter = styled.tfoot<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? "#eaeaea" : "#fafafa")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => {
  return <StyledFooter disabled={disabled}>{children}</StyledFooter>;
};

export default TableFooter;
