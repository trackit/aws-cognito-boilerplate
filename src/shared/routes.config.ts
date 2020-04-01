import { Login, Register } from "pages";
import { RouteProps } from "react-router-dom";

export const routes: RouteProps[] = [
  { path: "/", component: Login, exact: true },
  { path: "/register", component: Register }
];
