import { RouteProps, LinkProps } from "react-router-dom";
import { Home } from "pages";

/**
 * Those routes are used inside index.tsx by react-router-dom 
 * to dynamically generate routing
 */
export const routes: RouteProps[] = [
  { path: "/", component: Home, exact: true },
];

/**
 * This array of LinkProps is used by the Navbar component
 * to dynamically create navigation menu
 */
export const navbarLinks: LinkProps[] = [
  { to: "/login", title: "Login" },
  { to: "/register", title: "Register" },
];
