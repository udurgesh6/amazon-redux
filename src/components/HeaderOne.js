import React, { useState } from "react";
import "../css/HeaderOne.css";
import Amazon from "../assets/azperfect.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate, Link } from "react-router-dom";

function HeaderOne() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const onSignInButtonClick = () => {
    navigate("/login");
  };
  const onOrdersClick = () => {
    navigate("/orders");
  };
  const logmeOut = () => {
    navigate("/login");
    sessionStorage.clear();
  };

  return (
    <div className="headerOne">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "20%",
          paddingLeft: "20px",
          alignItems: "center",
        }}
      >
        <img src={Amazon} width="100px" style={{ marginRight: "20px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <LocationOnIcon style={{ color: "white" }} />
          <div className="address">
            <p className="address_ptags address_hello">Hello</p>
            <p className="address_ptags address_select">Select your address</p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          alignItems: "center",
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(event) => handleCategoryChange(event)}
          style={{ backgroundColor: "#F3F3F3", height: "40px", width: "25%" }}
        >
          <MenuItem value="All">All Categories</MenuItem>
          <MenuItem value="Alexa Skills">Alexa Skills</MenuItem>
          <MenuItem value="Amazon Devices">Amazon Devices</MenuItem>
          <MenuItem value="Alexa Fresh">Alexa Fresh</MenuItem>
          <MenuItem value="Amazon Fashion">Amazon Fashion</MenuItem>
          <MenuItem value="Alexa Pharmacy">Alexa Pharmacy</MenuItem>
        </Select>
        <input
          style={{ backgroundColor: "white", height: "37px", width: "70%" }}
        />
        <button
          style={{ backgroundColor: "#FEBD69", width: "5%", height: "42px" }}
        >
          <SearchIcon />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "20%",
          justifyContent: "space-between",
          paddingRight: "20px",
          alignItems: "center",
        }}
      >
        <div className="address">
          <p
            className="address_ptags address_hello"
            style={{ color: "white", cursor: "pointer" }}
            onClick={onSignInButtonClick}
          >
            Hello, Sign In
          </p>
          <p className="address_ptags address_select">Accounts & Lists</p>
        </div>
        <Link className="address" to="/orders">
          <p className="address_ptags address_hello" style={{ color: "white" }}>
            Returns
          </p>
          <p className="address_ptags address_select">& Orders</p>
        </Link>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <AddShoppingCartIcon style={{ color: "white" }} />
          <p
            style={{
              color: "white",
              padding: "0px",
              margin: "0px",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Cart
          </p>
        </div>
        <button onClick={logmeOut}>Log</button>
      </div>
    </div>
  );
}

export default HeaderOne;
