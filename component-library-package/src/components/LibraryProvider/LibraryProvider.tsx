import React from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export interface LibraryProviderProps {
  children: React.ReactNode;
}

export const LibraryProvider: React.FC<LibraryProviderProps> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default LibraryProvider;
