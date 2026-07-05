import React from "react";
import { Button } from "@local/components";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Store App</h1>
      <Button onClick={() => alert("Hello from components!")}>Click me</Button>
    </div>
  );
}
