import React from "react";
import { createRoot } from "react-dom/client";
import { LibraryProvider } from "@local/components";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <LibraryProvider>
      <App />
    </LibraryProvider>
  </React.StrictMode>,
);
