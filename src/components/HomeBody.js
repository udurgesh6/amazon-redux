import React, { useEffect, useState } from "react";
import "../css/HomeBody.css";
import C1 from "../assets/c1.jpg";
import C2 from "../assets/c2.jpg";
import C3 from "../assets/c3.jpg";
import C4 from "../assets/c4.jpg";
import C5 from "../assets/c5.jpg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FourProduct from "./FourProduct";
import ff1 from "../assets/firstfour/first.jpg";
import ff2 from "../assets/firstfour/second.jpg";
import ff3 from "../assets/firstfour/third.jpg";
import ff4 from "../assets/firstfour/fourth.jpg";
import OneProduct from "./OneProduct.js";
import fo1 from "../assets/firstOne/first.jpg";
import sf1 from "../assets/secondFour/first.jpg";
import sf2 from "../assets/secondFour/second.jpg";
import sf3 from "../assets/secondFour/third.jpg";
import sf4 from "../assets/secondFour/fourth.jpg";
import DF1 from "../assets/differentOne.jpg";

function HomeBody(props) {
  // Images List
  const [imagesList] = useState([C1, C2, C3, C4, C5]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  var [productsList, setProductsList] = useState(["Boat"]);
  const onProductsAdd = () => {
    console.log("Fired");
    setProductsList([...productsList, "Aeroplane"]);
  };

  const onRightClick = () => {
    if (currentImageIndex === 4) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex((currentImageIndex) => currentImageIndex + 1);
    }
  };

  const onLeftClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(4);
    } else {
      setCurrentImageIndex((currentImageIndex) => currentImageIndex - 1);
    }
  };

  return (
    <div
      className="home_body"
      style={{
        backgroundPosition: "center",
        backgroundImage: `url(${imagesList[currentImageIndex]})`,
        backgroundSize: "cover",
      }}
    >
      <div className="home_bodyTop">
        <KeyboardArrowLeftIcon
          fontSize="large"
          onClick={onLeftClick}
          style={{ cursor: "pointer" }}
        />
 
        <KeyboardArrowRightIcon
          fontSize="large"
          onClick={onRightClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="home_bodyBottom">
        <FourProduct
          imagesList={[
            { image: ff1, text: "Apple Phone" },
            { image: ff2, text: "Boat hps" },
            { image: ff3, text: "Alexa Devices and more" },
            { image: ff4, text: "2999 | Fire tv stick lite" },
          ]}
          headerText="Top deals with Alexa & Games for you | Up to 50% off"
          bottomText="See all offers"
          productAdd={onProductsAdd}
        />
        <OneProduct
          image={fo1}
          headerText="Big Savings for Everyone"
          bottomText="See all upcoming offers"
        />
        <FourProduct
          imagesList={[
            { image: sf1, text: "Spin & Win | Exciting offers for you" },
            { image: sf2, text: "2999 | Echo dot 4th gen" },
            { image: sf3, text: "Alexa Devices and more" },
            { image: sf4, text: "2999 | Fire tv stick lite" },
          ]}
          headerText="Starting ₹69 | Mobiles & Accessories"
          bottomText="See all offers"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "400px",
            width: "320px",
            padding: "20px",
          }}
        >
          <div
            style={{
              height: "40%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <p style={{ fontWeight: "600", fontSize: "22px" }}>
              Sign in for your best experience
            </p>
            <button
              style={{
                backgroundColor: "#FFD814",
                borderRadius: "10px",
                height: "30px",
                width: "200px",
                border: "0px",
              }}
            >
              Sign in securely
            </button>
          </div>
          <div style={{ height: "60%", padding: "20px" }}>
            <img src={DF1} height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
