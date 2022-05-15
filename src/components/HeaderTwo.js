import React from "react";
import "../css/HeaderTwo.css";
import HeaderTwoImg from "../assets/headerTwoImg.jpg";
function HeaderTwo() {
  return (
    <div className="header_two">
      {/* <div></div>
      <div></div> */}
      <div className="header_twoLeft">
        <p>All</p>
        <p>Best Sellers</p>
        <p>Mobiles</p>
        <p>Customer Service</p>
        <p>Today's Deals</p>
        <p>Fashion</p>
        <p>Electronics</p>
        <p>Prime</p>
        <p>Home & Kitchen</p>
        <p>New Releases</p>
        <p>Amazon Pay</p>
        <p>Computers</p>
      </div>
      <div className="header_twoRight">
        <img src={HeaderTwoImg} width="100%" />
      </div>
    </div>
  );
}

export default HeaderTwo;
