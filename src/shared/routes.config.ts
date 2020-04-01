import { Login, Register } from "pages";
import { RouteProps } from "react-router-dom";

// Theses routes are used inside index.tsx by react-router-dom
export const routes: RouteProps[] = [
  { path: "/", component: Login, exact: true },
  { path: "/register", component: Register }
];
