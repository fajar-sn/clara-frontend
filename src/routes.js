import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import Asset from "pages/Asset";
import Reservation from "pages/Reservation";
import ReservationDetail from "pages/ReservationDetail";
import AssetDetail from "pages/AssetDetail";
import AssetCreate from "pages/AssetCreate"
import AboutUs from "pages/AboutUs"

export const APP_ROUTE = [
  {
    name: "Login",
    path: "/",
    exact: true,
    component: Login,
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
  {
    name: "ReservationDetail",
    path: "/reservationdetail",
    exact: true,
    component: ReservationDetail,
    private: false,
  },
  {
    name: "AssetDetail",
    path: "/assetdetail",
    exact: true,
    component: AssetDetail,
    private: false,
  },
  {
    name: "AssetCreate",
    path: "/assetcreate",
    exact: true,
    component: AssetCreate,
    private: false,
  },
  {
    name: "About Us",
    path: "/aboutus",
    exact: true,
    component: AboutUs,
    private: false,
  },
];
