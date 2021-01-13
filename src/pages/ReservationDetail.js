import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { GET_RESERVATION_DETAIL } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ReservationDetailTemplate from "../components/ReservationDetailTemplate";
import ClaraFooter from "../components/Footer";
import { Alert, Container } from "react-bootstrap"

const ReservationDetail = (props) => {
  const [reservation, setReservation] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)
  const [updateCount, setUpdateCount] = useState(0)
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

  }, [updateCount])

  const updateReservationStatus = (data) => {
    axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

    axios.put(GET_RESERVATION_DETAIL + reservationID, data)
    .then((response) => {
      console.log(response);

      setSuccess(true)

      // to Trigger the reservation detail data fetch.
      setUpdateCount(updateCount + 1)
    })
    .catch((error) => {
      console.warn(error);
      setError(true)
    })
    .then(() => {
      setIsLoading(false);
    });
  }

  setTimeout(() => {
        setSuccess(false)
        setError(false)
    }, 3000);

  return (
    <div>
      <ClaraNavbar currentPage='Reservation'/>
        <Container>

        {
          error
          ? <Alert variant="danger">
              Error! Reservation update failed.
            </Alert>
          : ""
        }


      {
        success
        ? <Alert variant="success">
            Success! Reservation has been updated.
          </Alert>
        : ""
      }

    </Container>

      {isloading ? '' : <ReservationDetailTemplate reservation={reservation} onActionButtonClick={updateReservationStatus} />}
      <ClaraFooter />
    </div>
  );
};

export default ReservationDetail;
