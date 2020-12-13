import React, { useEffect, useState } from "react";
import {
  Container
} from "react-bootstrap";
import Cookies from 'js-cookie';
import axios from "axios";
import { GET_RESERVATION_LIST } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";
import ReservationTable from "../components/ReservationTable";
import Pagination from "react-js-pagination";

const Reservation = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState();
  const [itemsCountPerPage, setItemsCountPerPage] = useState();
  const [reservationList, setReservationList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_RESERVATION_LIST + pageIndex)
    .then((response) => {
      setReservationList(response.data);

      setItemsCountPerPage(response.data.per_page);
      setTotalItemsCount(response.data.total);
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

  const handlePageChange = (e) => {
    setPageIndex(e);
  }

  return (
    <div>
      <ClaraNavbar currentPage='Reservation'/>
      <Container className="mt-4">
        <span className="mr-auto h3">
          Reservation
        </span>
        { isLoading
          ? ''
          : <ReservationTable reservationList={reservationList} hasPagination={true} />
        }

        <Container className="d-flex flex-row-reverse">
        {isLoading
          ? ''
          : <Pagination
            hideNavigation
            pageRangeDisplayed={5}
            activePage={pageIndex}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            onChange={handlePageChange}
            itemClass="page-item float-right"
            linkClass="page-link"
            />
          }
        </Container>

      </Container>
      <ClaraFooter />
    </div>
  );
};

export default Reservation;
