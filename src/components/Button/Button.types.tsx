export interface ButtonProps {
  label?: string;
  disabled?: boolean;
  color?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
