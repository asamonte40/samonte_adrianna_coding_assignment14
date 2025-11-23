import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: 200px;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const Img: React.FC<ImgProps> = ({
  src = "/yippee.jpg",
  alt,
  disabled,
  style,
}) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} style={style} />;
};

export default Img;
