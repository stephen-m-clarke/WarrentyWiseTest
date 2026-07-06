import React from "react";
import { Box } from "@local/components";
import { CONTENT_MAX_WIDTH } from "../../variables";

export interface PageContentProps {
  children?: React.ReactNode;
}

export const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Box px={64} py="lg" maw={CONTENT_MAX_WIDTH} mx="auto" ff="sans-serif">
      {children}
    </Box>
  );
};

export default PageContent;
