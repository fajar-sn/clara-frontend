import Login from "pages/Login";
import HomePage from "pages/HomePage";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Asset from "pages/Asset";
import Reservation from "pages/Reservation";
import ReservationDetail from "pages/ReservationDetail";

export const APP_ROUTE = [
  {
    name: "Login",
    path: "/",
    exact: true,
    component: Login,
    restricted: false,
  },
  {
    name: "HomePage",
    path: "/hehe",
    exact: true,
    component: HomePage,
    restricted: false,
  },
  {
    name: "Home",
    path: "/home",
    exact: true,
    component: Home,
    private: true,
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
  {
    name: "ReservationDetail",
    path: "/reservationdetail",
    exact: true,
    component: ReservationDetail,
    private: false,
  },
];
