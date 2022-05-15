import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hps from "../assets/hps.jpg";
import "../css/OrderDetail.css";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/productSlice";

function OrderDetail(props) {
  const dispatch = useDispatch();

  const onProductRemove = (id) => {
    dispatch(
      removeProduct({
        id: id,
      })
    );
  };

  return (
    <Container
      fluid
      style={{
        marginTop: "20px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <Row
        style={{
          borderBottom: "1px solid black",
          paddingTop: "10px",
          backgroundColor: "#F0F2F2",
        }}
      >
        <Col md={2} xs={4}>
          <p className="remove_paddingMargin od_top">ORDER PLACED </p>
          <p className="remove_paddingMargin od_bottom">23 April 2022</p>
        </Col>
        <Col md={2} xs={4} style={{ display: "flex", flexDirection: "column" }}>
          <p className="remove_paddingMargin od_top">TOTAL </p>
          <p className="remove_paddingMargin od_bottom">1299</p>
        </Col>
        <Col md={2} xs={4} style={{ display: "flex", flexDirection: "column" }}>
          <p className="remove_paddingMargin od_top">Ship To</p>
          <p className="remove_paddingMargin od_bottom links">
            Durgesh Upadhyay
          </p>
        </Col>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p className="remove_paddingMargin od_top">
            ORDER # 406-7553936-0124345
          </p>
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="remove_paddingMargin"
          >
            <Link to="/" className="remove_paddingMargin od_bottom">
              View order details
            </Link>{" "}
            <p>|</p>{" "}
            <Link to="/" className="remove_paddingMargin od_bottom">
              Invoice
            </Link>
          </div>
        </Col>
      </Row>
      <Row style={{ borderBottom: "1px solid black" }}>
        <Col md={9} xs={12} style={{ padding: "20px" }}>
          <p style={{ fontWeight: "500" }}>Delivered 25-Apr-2022</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={Hps} style={{ height: "80px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "10px",
              }}
            >
              <p
                style={{ padding: "0px", margin: "0px", fontSize: "14px" }}
                className="links"
              >
                {props.product.name}
              </p>
              <p style={{ padding: "0px", margin: "0px", fontSize: "12px" }}>
                Return window closed on 02-May-2022
              </p>
              <button
                style={{
                  width: "120px",
                  borderRadius: "10px",
                  backgroundColor: "#FFD814",
                }}
              >
                Order Again
              </button>
            </div>
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <button
            style={{
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "white",
              fontSize: "13px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
            onClick={() => onProductRemove(props.product.id)}
          >
            Remove Item
          </button>
          <button
            style={{
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "white",
              fontSize: "13px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            Leave Seller Package
          </button>
          <button
            style={{
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "white",
              fontSize: "13px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            Leave Delivery Package
          </button>
          <button
            style={{
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "white",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Write a product review
          </button>
        </Col>
      </Row>
      <Row style={{ padding: "10px" }}>
        <Link to="/" className="links">
          Archive Order
        </Link>
      </Row>
    </Container>
  );
}

export default OrderDetail;
