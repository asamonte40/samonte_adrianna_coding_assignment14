export interface DropdownProps {
  label?: string;
  options: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
}
