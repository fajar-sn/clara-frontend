import React from "react";
import { Container, Dropdown, Row, Col, Card, Button, Pagination, Table, Image, Form } from "react-bootstrap"
import { IMAGE_URL, GET_ASSET_DETAIL } from 'constants/urls';
import axios from "axios";
import Cookies from 'js-cookie';
import './AssetDetailTemplate.css';
import FormData from 'form-data'

export default function AssetDetailTemplate(props) {
  const asset = props.asset;
  const assetID = asset._id;
  var assetName = asset.name;
  var assetQuantity = asset.quantity;
  const assetImage = IMAGE_URL + asset.image;
  var newImage;
  
  const updateAsset = () => {
    console.log(asset._id)
    console.log(assetName);
    console.log(assetQuantity);
    console.log(newImage);

    const formData = new FormData();
    formData.append("name",assetName);
    formData.append("quantity",assetQuantity);
    formData.append("image",newImage);
    
    axios.post(GET_ASSET_DETAIL+assetID,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  return (
    <div className="mt-4">
      <Container>
        <div className="header d-flex align-items-center">
          <span className="mr-auto h3">
            Edit Asset
            </span>
        </div>
        <Row>
          <Col xs={8} md={4}>
            <Image src={assetImage} fluid />
          </Col>
          <Col xs={10} md={6}>

            <Row>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Asset Name" defaultValue={asset.name} onChange={(e) => assetName = e.target.value}/>
                </Form.Group>
              
                <Form.Group controlId="formQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="text" placeholder="Quantity" defaultValue={asset.quantity} onChange={(e) => assetQuantity = e.target.value}/>
                </Form.Group>

                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Image" onChange={(e) => newImage = e.target.files[0]}/>
                </Form.Group>
              
                <Form.Group>
                  <Button className="action-button" onClick={() => updateAsset()}>
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
  )
}
