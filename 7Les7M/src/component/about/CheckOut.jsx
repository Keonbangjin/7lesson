import React, { Component } from "react";
import Billing_details from "./Billing_details";
import Product from "./Product";

export default class CheckOut extends Component {
  render() {
    return (
      <div>
        <div className=" mt-[50px] flex justify-between p-14">
          <Billing_details />
          <Product />
        </div>
      </div>
    );
  }
}
