import React, { Component } from 'react';
import './App.css';
import Item from "./Item.js"
import Seller from './Seller.js'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import{reviews} from './ItemDetails.js'

let formatReviewer = (name)=>{
  let filteredReviews = reviews.filter((review) => review.reviewerId ===name)
  return <div>Reviews by {name}: {filteredReviews.map((reviewitem)=><li>{reviewitem.review}</li>)}</div>
}

class Reviewer extends Component {


  render() {
  
    return (
      <div className="card center">
      {formatReviewer(this.props.reviewerId)}</div>
      
    //  <div>{seeReviews(reviewers[this.props.id])}</div>
    );
  }
}

export default Reviewer;
