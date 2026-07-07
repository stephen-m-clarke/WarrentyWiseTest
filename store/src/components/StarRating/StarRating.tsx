import React from "react";
import { Flex, Text } from "@local/components";
import { COLORS } from "../../variables";

export interface StarRatingProps {
  rate: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rate }) => {
  const full = Math.floor(rate);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text
        key={i}
        span
        c={i <= full ? COLORS.starFilled : COLORS.starEmpty}
        size="sm"
      >
        ★
      </Text>,
    );
  }
  return (
    <Flex align="center" gap={2}>
      <Text span c={COLORS.textMuted} size="xs">{rate}</Text>
      <span>{stars}</span>
    </Flex>
  );
};

export default StarRating;
