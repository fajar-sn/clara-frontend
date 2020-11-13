import React from "react";
import {Container, Dropdown, Row, Col, Card, Button, Pagination} from "react-bootstrap"
import { IMAGE_URL } from 'constants/urls';


export default function AssetTemplate(props){
  const assetList = props.assetList;
  const firstAssetData = assetList.data.slice(0, 4);
  const secondAssetData = assetList.data.slice(4);

  console.log(assetList);

  let active = assetList.current_page;
  let totalPage = assetList.last_page;
  let items = [];

  if(totalPage < 4) {
    items.push(<Pagination.First disabled />);

    for(let number = 1; number <= totalPage; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    items.push(<Pagination.Last disabled />);
  } else {
    items.push(<Pagination.First />);

    for (let number = active - 1; number <= active + 1; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    items.push(<Pagination.Last />);
  }

  const assetListMap = (listData) => {
    const result = listData.map(asset => (
          <Col>
            <Card className="rounded">
              <Card.Img variant="top" src={IMAGE_URL + '/' + asset.type + 's/' + asset.image} />
              <Card.Body>
                <Card.Title>{asset.name}</Card.Title>
                <Card.Text>
                  <span>Quantity : {asset.quantity}</span>
                </Card.Text>
              </Card.Body>
            </Card>
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

        <Container className="mt-4">
          <Pagination className="float-right">{items}</Pagination>
        </Container>
        <br />
    </div>
  )
}
