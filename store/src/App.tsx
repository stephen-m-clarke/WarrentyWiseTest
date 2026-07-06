import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@local/components";
import { routes } from "./routes";

const App = () => {
  return (
    <Box p="lg" maw={1200} mx="auto" ff="sans-serif">
      <h1>Store App</h1>

      <Routes>
        {routes.map((route) =>
          route.redirect ? (
            <Route
              key={route.path}
              path={route.path}
              element={<Navigate to={route.redirect} replace />}
            />
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          ),
        )}
      </Routes>
    </Box>
  );
};

export default App;
