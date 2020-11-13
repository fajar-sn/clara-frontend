import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import { GET_RESERVATION_LIST } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";
import ReservationTemplate from "../components/reservation/ReservationTemplate"

const Reservation = () => {
  const [reservationList, setReservationList] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_RESERVATION_LIST)
    .then((response) => {
      setReservationList(response.data);
    })
    .catch((error) => {
      setError(true);
      console.warn(error);
    })
    .then(() => {
      setIsLoading(false);
    });

    return () => {};
  }, []);

  return (
    <div>
      <ClaraNavbar currentPage='Reservation'/>
      { isloading ? '' : <ReservationTemplate reservationList={reservationList} />
      }
      <ClaraFooter />
    </div>
  );
};

export default Reservation;
