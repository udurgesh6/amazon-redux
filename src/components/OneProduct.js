import React from "react";
import "../css/FourProduct.css";

function FourProduct(props) {
  return (
    <div className="four_product">
      <p
        style={{
          height: "20%",
          padding: "0px",
          margin: "0px",
          fontWeight: "600",
          fontSize: "22px",
        }}
      >
        {props.headerText}
      </p>
      <img height="66%" src={props.image} />
      <p style={{ height: "4%", fontSize: "13px", color: "#147C8F" }}>
        {props.bottomText}
      </p>
    </div>
  );
}

export default FourProduct;
