import React, { Component } from 'react';
import './App.css';
import SellerDetails from "./SellerDetails.js"
import { Route, BrowserRouter, Link } from 'react-router-dom'


let sellers = [{
  name: "Jack Frost",
  rating: "5 stars",
  id: 0
},
{
  name: "Hank Green",
  rating: "2 stars",
  id:1
},
{
  name: "Mary Brurns",
  rating: "5 stars",
  id:2
},

]

let formatSeller = (seller) => {
  return (<div className="card center">
    <div>
      <div>{seller.name}</div>
      <div>{seller.rating}</div>
      <Link to={"/sellerdetails/"+seller.id}>Click to see other sellers items</Link>
    </div>
  </div>)
}

class Seller extends Component {
  render() {
    return (
      <div>{formatSeller(sellers[this.props.id])}</div>
    );
  }
}

export default Seller;
export {sellers}