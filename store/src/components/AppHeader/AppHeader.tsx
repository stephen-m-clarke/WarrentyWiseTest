import React from "react";
import { Box, Header, Text } from "@local/components";
import { CONTENT_MAX_WIDTH } from "../../variables";

export const AppHeader: React.FC = () => {
  return (
    <Header>
      <Box maw={CONTENT_MAX_WIDTH} mx="auto" w="100%" px={32}>
        <Text size="lg" fw={700} c="white">
          Store App
        </Text>
      </Box>
    </Header>
  );
};

export default AppHeader;
