import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { routes } from "./routes";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { PageContent } from "./components/PageContent/PageContent";

const App = () => {
  return (
    <>
      <AppHeader />

      <PageContent>
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
      </PageContent>
    </>
  );
};

export default App;
