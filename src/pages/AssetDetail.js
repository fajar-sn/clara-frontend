import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { GET_ASSET_DETAIL } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import AssetDetailTemplate from "../components/AssetDetailTemplate";
import ClaraFooter from "../components/Footer";

const AssetDetail = (props) => {
  const [asset, setAsset] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const assetID = props.location.state.assetID;

  console.log(assetID);

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  useEffect(() => {
    setIsLoading(true);

    axios.get(GET_ASSET_DETAIL + assetID)
    .then((response) => {
      setAsset(response.data);
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
      <ClaraNavbar currentPage='Asset'/>
      {isloading ? '' : <AssetDetailTemplate asset={asset} />}
      <ClaraFooter />
    </div>
  );
};

export default AssetDetail;
