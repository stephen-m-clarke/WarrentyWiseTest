import React, { useState } from "react";
import {
  Slider as MantineSlider,
  Input,
  Group,
  Text,
  Box,
} from "@mantine/core";

export interface SliderProps {
  label?: string;
  valuePrefix?: string;
  valueSuffix?: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  marks?: { value: number; label?: React.ReactNode }[];
}

export const Slider: React.FC<SliderProps> = ({
  label,
  valuePrefix,
  valueSuffix,
  value,
  defaultValue,
  onChange,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? 0);
  const currentValue = value ?? internalValue;

  const handleChange = (v: number) => {
    setInternalValue(v);
    onChange?.(v);
  };

  const formatValue = (v: number) =>
    `${valuePrefix ?? ""}${v}${valueSuffix ?? ""}`;

  return (
    <div>
      {label && (
        <Group mb={4} gap={8}>
          <Input.Label>{label}</Input.Label>
          <Text span c="dimmed" size="sm">
            {formatValue(currentValue)}
          </Text>
        </Group>
      )}
      <Box py={9} miw={200}>
        <MantineSlider
          value={currentValue}
          onChange={handleChange}
          label={formatValue}
          {...rest}
        />
      </Box>
    </div>
  );
};

export default Slider;
