import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import MainOrders from "./MainOrders";
import "../css/Orders.css";
import BuyAgain from "./BuyAgain";
import H1 from "./HeaderOne.js";
import H2 from "./HeaderTwo.js";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  useEffect(() => {
    const userExists = sessionStorage.getItem("auth");
    console.log(userExists);
    if (userExists) {
      //
    } else {
      navigate("/login");
    }
  }, []);
  
  const [currentlyShowing, setCurrentlyShowing] = useState("Orders");
  return (
    <Container fluid style={{ height: "100vh" }}>
      <H1 />
      <H2 />
      <Row style={{ height: "86%", paddingTop: "10px" }}>
        <Col lg={2} className="d-none d-md-block"></Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          lg={8}
        >
          <p style={{ fontSize: "14px", fontWeight: "500" }}>
            <span style={{ color: "#007195" }}>
              Your Account <ChevronRightIcon fontSize="small" />
            </span>{" "}
            <span style={{ color: "red" }}>Your Orders</span>
          </p>
          <Container style={{ padding: "0px" }}>
            <Row>
              <Col xs={12} md={6}>
                <p style={{ fontSize: "25px", fontWeight: "500" }}>
                  Your Orders
                </p>
              </Col>
              <Col xs={6} md={4}>
                {/* <input style={{ width: "100%" }} /> */}
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "34px",
                  }}
                  style={{ border: "1px solid black" }}
                >
                  <IconButton type="submit" sx={{ p: "10px" }}>
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search all orders"
                  />
                </Paper>
              </Col>
              <Col xs={6} md={2}>
                <button
                  style={{
                    width: "100%",
                    height: "34px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "500",
                    borderRadius: "25px",
                  }}
                >
                  Search Orders
                </button>
              </Col>
            </Row>
          </Container>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <Link
              to="/orders"
              className="links"
              onClick={() => setCurrentlyShowing("Orders")}
            >
              Orders
            </Link>
            <Link
              to="/orders"
              className="links"
              onClick={() => setCurrentlyShowing("BA")}
            >
              Buy Again
            </Link>
            <Link
              to="/orders"
              className="links"
              onClick={() => setCurrentlyShowing("NYS")}
            >
              Not Yet Shipped
            </Link>
            <Link
              to="/orders"
              className="links"
              onClick={() => setCurrentlyShowing("CO")}
            >
              Cancelled Orders
            </Link>
          </div>
          {currentlyShowing === "Orders" && <MainOrders />}
          {currentlyShowing === "BA" && <BuyAgain />}
        </Col>
        <Col lg={2} className="d-none d-md-block"></Col>
      </Row>
    </Container>
  );
}

export default Orders;
