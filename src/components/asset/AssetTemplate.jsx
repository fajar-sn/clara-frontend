import React from "react";
import { Row, Col, Card } from "react-bootstrap"
import { IMAGE_URL } from 'constants/urls';
import { Link } from "react-router-dom";


export default function AssetTemplate(props){

  const assetList = typeof props.assetList.data == "undefined" ? props.assetList : props.assetList.data;
  const firstAssetData = assetList.slice(0, 4);
  const secondAssetData = assetList.slice(4);

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
              <Card.Img variant="top" src={IMAGE_URL + asset.image} height="250px" />
              <Card.Body>
                <Card.Title>{asset.name}</Card.Title>
                <Card.Text>
                  <span>{asset.quantity} in stock</span>
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
          { assetList.length === 0
            ? <p>No assets found.</p>
            : <div className="card-section mt-4" >

              <Row>
                {assetListMap(firstAssetData)}
              </Row>

              <Row className="mt-4">
                {assetListMap(secondAssetData)}
              </Row>

            </div>
          }
    </div>
  )
}
