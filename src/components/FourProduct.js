import React from "react";
import "../css/FourProduct.css";
import first from "../assets/firstfour/first.jpg";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { useSelector } from "react-redux";

function FourProduct(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const onProductAdd = () => {
    dispatch(
      addProduct({
        id: products.length + 1,
        name: "Aeroplane",
      })
    );
  };
  
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "33%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "46%" }}
          onClick={onProductAdd}
        >
          <img height="70%" src={props.imagesList[0].image} />
          <p
            style={{
              height: "30%",
              padding: "0px",
              margin: "0px",
              fontSize: "12px",
            }}
          >
            {props.imagesList[0].text}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "46%" }}>
          <img height="70%" src={props.imagesList[1].image} />
          <p
            style={{
              height: "30%",
              padding: "0px",
              margin: "0px",
              fontSize: "12px",
            }}
          >
            {props.imagesList[1].text}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "33%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "46%" }}>
          <img height="70%" src={props.imagesList[2].image} />
          <p
            style={{
              height: "30%",
              padding: "0px",
              margin: "0px",
              fontSize: "12px",
            }}
          >
            {props.imagesList[2].text}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "46%" }}>
          <img height="70%" src={props.imagesList[3].image} />
          <p
            style={{
              height: "30%",
              padding: "0px",
              margin: "0px",
              fontSize: "12px",
            }}
          >
            {props.imagesList[3].text}
          </p>
        </div>
      </div>
      <p style={{ height: "4%", fontSize: "13px", color: "#147C8F" }}>
        {props.bottomText}
      </p>
    </div>
  );
}

export default FourProduct;
