import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate" />
        <Order orderType="Money" />
      </ul>
    </div>
  );
};

export default Restaurant;
