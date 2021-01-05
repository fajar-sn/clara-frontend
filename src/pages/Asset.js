import React, { useEffect, useState } from "react";
import {
  Container, Button, Row, Col
} from "react-bootstrap";
import axios from "axios";
import Cookies from 'js-cookie';
import { GET_ASSET_LIST, GET_SEARCH_ASSET } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";
import AssetTemplate from "../components/asset/AssetTemplate"
import Pagination from "react-js-pagination";
import SearchField from "react-search-field";
import { Link } from "react-router-dom";

const Asset = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [assetList, setAssetList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalItemsCount, setTotalItemsCount] = useState();
  const [itemsCountPerPage, setItemsCountPerPage] = useState();
  const [searchKeyword, setSearchKeyword] = useState("");

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_SEARCH_ASSET + searchKeyword)
    .then((response) => {
      setAssetList(response.data);

      // Currently set to 0 to remove the pagination.
      // setTotalItemsCount(0);
    })
    .catch((error) => {
      setError(true);
      console.warn(error);
    })
    .then(() => {
      setIsLoading(false);
    });

    // setSearchKeyword("");
  }, [searchKeyword]);

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_ASSET_LIST + pageIndex)
    .then((response) => {
      setAssetList(response.data.data);

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

  }, [pageIndex]);



  const handlePageChange = (e) => {
    setPageIndex(e);
  }

  const searchAnotherAsset = (searchValue, callback) => {
    setSearchKeyword(searchValue);
  }

  console.log(assetList);

  return (
    <div>
      <ClaraNavbar currentPage='Asset'/>

      <Container className ="mt-4 ">

        <div>
        <Row>

          <Col>
            <span className="mr-auto h3">
              Asset
            </span>
          </Col>

          <Col>
            <SearchField
              placeholder="Search..."
              onEnter={searchAnotherAsset}
              onSearchClick={searchAnotherAsset}
              />
          </Col>

          <Col>

              <Link to={{
                    pathname: '/AssetCreate',
                    state: {

                    }
                  }}><Button variant="primary">Add Asset</Button></Link>

          </Col>

        </Row>
        </div>

        {isLoading
          ? ''
          : <AssetTemplate assetList={assetList} />
        }

        <div className="d-flex flex-row-reverse">
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
        </div>

      </Container>



      <ClaraFooter />

    </div>
  );
};

export default Asset;
