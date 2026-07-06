import React from "react";
import { Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirect?: string;
}

export const routes: RouteConfig[] = [
  { path: "/", redirect: "/products" },
  { path: "/products", element: <ProductsPage /> },
  { path: "/product/:id", element: <ProductDetailPage /> },
];
