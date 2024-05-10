import React, { Component } from "react";

import Order from "../../assets/images/order.svg";

export default class Product extends Component {
  render() {
    return (
      <div>
        <img src={Order} alt="" />
      </div>
    );
  }
}
