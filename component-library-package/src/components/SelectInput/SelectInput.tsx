import React from "react";
import { Select } from "@mantine/core";

export interface SelectInputProps {
  label?: string;
  placeholder?: string;
  data?: string[];
  value?: string | null;
  onChange?: (value: string | null) => void;
}

export const SelectInput: React.FC<SelectInputProps> = (props) => {
  return <Select miw={200} {...props} />;
};

export default SelectInput;
