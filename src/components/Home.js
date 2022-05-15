import React, { useEffect, useState } from "react";
import HeaderOne from "./HeaderOne";
import HeaderTwo from "./HeaderTwo";
import HomeBody from "./HomeBody";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [pro, setPro] = useState([]);

  useEffect(() => {
    const userExists = sessionStorage.getItem("auth");
    console.log(userExists);
    if (userExists) {
      //
    } else {
      navigate("/login");
    }

    // axios
    //   .get("http://localhost:8080/products")
    //   .then((res) => {
    //     res.data.map((product) => {
    //       setPro((pro) => [...pro, product.product_detail]);
    //     });
    //   })
    //   .catch((err) => alert(`Some error occured - ${err}`));

    // axios
    //   .post("http://localhost:8080/products/create?detail=Nexus500")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => alert(`Some error occured - ${err}`));

    // axios
    //   .put("http://localhost:8080/product/update?detail=EchoDot&id=2")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => alert(`Some error occured - ${err}`));

    // axios
    //   .delete("http://localhost:8080/product/delete?id=4")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => alert(`Some error occured - ${err}`));
  }, []);

  return (
    <div className="home">
      <HeaderOne />
      <HeaderTwo />
      <HomeBody products={pro} />
    </div>
  );
}

export default Home;
