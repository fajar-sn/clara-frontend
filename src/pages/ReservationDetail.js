import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { GET_RESERVATION_DETAIL } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ReservationDetailTemplate from "../components/ReservationDetailTemplate";
import ClaraFooter from "../components/Footer";

const ReservationDetail = (props) => {
  const [reservation, setReservation] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const reservationID = props.location.state.reservationID;

  console.log(reservationID);

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_RESERVATION_DETAIL + reservationID)
    .then((response) => {
      setReservation(response.data);
      console.log(response);
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
      {isloading ? '' : <ReservationDetailTemplate reservation={reservation} />}
      <ClaraFooter />
    </div>
  );
};

export default ReservationDetail;
