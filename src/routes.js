import Login from "pages/Login";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Asset from "pages/Asset";
import Reservation from "pages/Reservation";

export const APP_ROUTE = [
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: true,
  },
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
    restricted: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    private: true,
  },
  {
    name: "Asset",
    path: "/asset",
    exact: true,
    component: Asset,
    private: true,
  },
  {
    name: "Reservation",
    path: "/reservation",
    exact: true,
    component: Reservation,
    private: true,
  },
];
