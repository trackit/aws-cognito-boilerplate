import { Login, Register } from "pages";
import { RouteProps, LinkProps } from "react-router-dom";

/*
  Those routes are used inside index.tsx by react-router-dom to dynamically generate routing
*/
export const routes: RouteProps[] = [
  { path: "/login", component: Login, exact: true },
  { path: "/register", component: Register }
];

/*
  Those routes are passed as props to Header component to dynamically generate navbar links
*/
export const navbarLinks: LinkProps[] = [
  { to: "/login", title: "Login" },
  { to: "/register", title: "Register" }
];
