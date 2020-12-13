import React, { useEffect, useState } from "react";
import {
  Container
} from "react-bootstrap";
import axios from "axios";
import Cookies from 'js-cookie';
import { GET_ASSET_LIST } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";
import AssetTemplate from "../components/asset/AssetTemplate"
import Pagination from "react-js-pagination";

const Asset = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [assetList, setAssetList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalItemsCount, setTotalItemsCount] = useState();
  const [itemsCountPerPage, setItemsCountPerPage] = useState();

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_ASSET_LIST + pageIndex)
    .then((response) => {
      setAssetList(response.data);

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
  }, [pageIndex]);

  const handlePageChange = (e) => {
    setPageIndex(e);
  }

  console.log(assetList);

  return (
    <div>
      <ClaraNavbar currentPage='Asset'/>

      {isLoading
        ? ''
        : <AssetTemplate assetList={assetList} />
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

      <ClaraFooter />

    </div>
  );
};

export default Asset;
