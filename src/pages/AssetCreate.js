import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { Container, Dropdown, Row, Col, Card, Button, Pagination, Table, Image, Form } from "react-bootstrap";
import { POST_ASSET_CREATE } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import AssetDetailTemplate from "../components/AssetDetailTemplate";
import ClaraFooter from "../components/Footer";
import { withRouter, Link, useLocation, useHistory } from 'react-router-dom';

const AssetCreate = () => {
  var assetName;
  var assetQuantity;
  var newImage;

  const history = useHistory();
  

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  const saveAsset = () => {
    console.log(assetName);
    console.log(assetQuantity);
    console.log(newImage);

    const formData = new FormData();
    formData.append("name",assetName);
    formData.append("quantity",assetQuantity);
    formData.append("image",newImage);
    
    axios.post(POST_ASSET_CREATE,formData,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    .then((response) => {
      console.log(response);
      history.push('/asset')
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  return (
    <div>
      <ClaraNavbar currentPage='Asset'/>
      <div className="mt-4">
      <Container>
        <div className="header d-flex align-items-center">
          <span className="mr-auto h3">
            Create Asset
            </span>
        </div>
        <Row>
          <Col xs={1} md={1}>
            
          </Col>
          <Col xs={10} md={6}>

            <Row>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Asset Name" onChange={(e) => assetName = e.target.value}/>
                </Form.Group>
              
                <Form.Group controlId="formQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="text" placeholder="Quantity" onChange={(e) => assetQuantity = e.target.value}/>
                </Form.Group>

                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Image" onChange={(e) => newImage = e.target.files[0]}/>
                </Form.Group>
              
                <Form.Group>
                  <Button className="action-button" onClick={() => saveAsset()}>
                    Save
                  </Button> 
                </Form.Group>
              </Form>
            </Row>
          </Col>
          <Col xs={0} md={2} />
        </Row>

      </Container>
      <br />
    </div>
      <ClaraFooter />
    </div>
  );
};

export default AssetCreate;
