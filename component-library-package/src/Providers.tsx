import React from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default Providers;
