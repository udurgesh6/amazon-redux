import React from "react";
import OrderDetail from "./OrderDetail";
import { useSelector } from "react-redux";

function MainOrders() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      {products.map((product) => (
        <OrderDetail product={product} />
      ))}
    </div>
  );
}

export default MainOrders;
