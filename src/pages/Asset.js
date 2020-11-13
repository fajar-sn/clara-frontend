import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import Cookies from 'js-cookie';
import { GET_ASSET_LIST } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";
import AssetTemplate from "../components/asset/AssetTemplate"

const Asset = () => {
  const [assetList, setAssetList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_ASSET_LIST)
    .then((response) => {
      setAssetList(response.data);
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

  console.log(assetList);

  return (
    <div>
      <ClaraNavbar currentPage='Asset'/>
      {isLoading ? '' : <AssetTemplate assetList={assetList} />}
      <ClaraFooter />
    </div>
  );
};

export default Asset;
