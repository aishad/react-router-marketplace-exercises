import React, { Component } from 'react';
import './App.css';
import Item from "./Item.js"
import Seller from './Seller.js'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Reviewer from './Reviewer.js'



let reviews = [{  
  reviewerId:"frequent_shopper",
  review: "I hated this item",
},
{  
  reviewerId: "frequent_shopper",
  review: "BOOO",
}
,{
  reviewerId:"John",
  review: "HATE",
},{
  reviewerId:"MARY",
  review: "I can't",
},{
  
  reviewerId:"MARY",
  review: "http",
},{
  
  reviewerId:"lonelystudent",
  review: "The best",
},{
  reviewerId:"PAT",
  review: "Would buy again!",
},


]

     //<Link to={"/reviewer/" + item.reviewerId}>Click to see other reviews by {item.reviewerId}</Link>


class ItemDetails extends Component {
  render() {
    var fakeArray = this.props.idList.split(",")
    console.log(fakeArray)
    var reviewsJSX = fakeArray.map((el)=>{
      return(
        <div className="card center">
          Name : {reviews[Number(el)].reviewerId}
          <br/>
          Comment : {reviews[Number(el)].review}
          <hr/>
          <Link to={"/reviewer/"+ reviews[Number(el)].reviewerId}>View other comments from {reviews[Number(el)].reviewerId}</Link>
        </div>
      )
    })
    return (
      <div>{reviewsJSX}</div>
    )}}

export default ItemDetails;
export {reviews};
