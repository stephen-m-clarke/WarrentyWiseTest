import React from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "@local/components";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
