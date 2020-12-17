import React from "react";
import {Container, Dropdown, Row, Col, Card, Button, Pagination} from "react-bootstrap"
import { IMAGE_URL } from 'constants/urls';
import { Link } from "react-router-dom";


export default function AssetTemplate(props){
  const assetList = props.assetList;
  const firstAssetData = assetList.data.slice(0, 4);
  const secondAssetData = assetList.data.slice(4);

  console.log(assetList);

  const assetListMap = (listData) => {
    const result = listData.map(asset => (
          <Col>
            <Link to={{
                pathname: '/assetDetail',
                state: {
                  assetID: asset._id,
                }
            }}>
              <Card className="rounded" >
                <Card.Img variant="top" src={IMAGE_URL + asset.image} />
                <Card.Body>
                  <Card.Title>{asset.name}</Card.Title>
                  <Card.Text>
                    <span>Quantity : {asset.quantity}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

      ));
      return result;
  }



  return (
    <div className="asset-template mt-4">
        <Container>
          <div className="header d-flex align-items-center">
            <span className="mr-auto h3">
              Asset
            </span>

            <span className="ml-auto">
              Show :
            </span>

            <Dropdown className="ml-2">
              <Dropdown.Toggle className="border border-secondary font-weight-bold" variant="white" id="dropdown-basic">
                Item
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >Item</Dropdown.Item>
                <Dropdown.Item >Room</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="card-section mt-4" >
            <Row>
              {assetListMap(firstAssetData)}
            </Row>
            <Row className="mt-4">
              {assetListMap(secondAssetData)}
            </Row>
          </div>

        </Container>
        <br />
    </div>
  )
}
