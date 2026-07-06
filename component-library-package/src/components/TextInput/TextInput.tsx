import React from "react";
import { TextInput as MantineTextInput } from "@mantine/core";

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return <MantineTextInput {...props} />;
};

export default TextInput;
