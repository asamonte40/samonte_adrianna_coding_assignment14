import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledCell = styled.td<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? "#f2f2f2" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled,
  colSpan,
}) => {
  return (
    <StyledCell disabled={disabled} colSpan={colSpan}>
      {children}
    </StyledCell>
  );
};

export default TableCell;
