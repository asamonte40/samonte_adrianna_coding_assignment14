export interface HeroImageProps {
  src: string;
  text?: string;
  alt?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  height?: string;
  overlayColor?: string;
}
