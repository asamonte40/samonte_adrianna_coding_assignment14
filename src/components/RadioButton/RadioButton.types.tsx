export interface RadioButtonProps {
  name: string;
  options: string[];
  disabled?: boolean;
  label?: string;
  selected?: string; // currently selected value
  onChange?: (value: string) => void;
}
