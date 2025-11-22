import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHero = styled.div<{ disabled?: boolean; height?: string }>`
  width: 100%;
  height: ${({ height }) => height || "60vh"};
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div<{ overlayColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ overlayColor }) =>
    overlayColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src = "/mofusand.jpg",
  text,
  disabled,
  height,
  overlayColor,
  children,
}) => {
  return (
    <StyledHero disabled={disabled} height={height}>
      <StyledImg src={src} alt={text || "Hero image"} />
      <Overlay overlayColor={overlayColor}>
        {children ? (
          children
        ) : (
          <div
            style={{
              background: "rgba(255,255,255,0.7)",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "1.5rem",
              color: "#000",
            }}
          >
            {text}
          </div>
        )}
      </Overlay>
    </StyledHero>
  );
};

export default HeroImage;
