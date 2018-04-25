import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Item from "./Item.js"
import ItemDetails from './ItemDetails.js'
import Seller from './Seller.js'
import{items} from './App.js'


let renderAllItems = () => {
  return items.map((item, idx)=> (<Item
    price={item.price}
    sellerId={item.sellerId}
    imageLocation={item.image}
    description={item.description}
    stock={item.stock}
    review={item.review}
    itemId={idx}
    reviewList = {item.reviewList}
    />))
}

class SellerDetails extends Component {
  render() {
      //console.log(this.props)
      //console.log(items)
      var filteredItems = items.filter((el,id)=>{return (Number(el.sellerId) === Number(this.props.sellerId))})
      //console.log(filteredItems)
      var filteredItemsJSX = filteredItems.map(item => (<Item
          price={item.price}
          sellerId={item.sellerId}
          imageLocation={item.image}
          description={item.description}
          quantity={item.quantity}
         reviewList={item.reviewList} />))
      
      return (
          <div>{filteredItemsJSX}</div>
      )
  }
}




// let renderAllItems = () => {
//   return items.map((item, idx)=> (<Item
//     price={item.price}
//     sellerId={item.sellerId}
//     imageLocation={item.image}
//     description={item.description}
//     stock={item.stock}
//     review={item.review}
//     itemId={idx}
//     reviewList = {item.reviewList}
//     />))
// }



// let formatItems = (sellerId)=>{

// let allItems = items.filter((i)=> {
//   let nSellerId=Number(sellerId.sellerId)
//   let iSellerId = i.sellerId;
//    (nSellerId === iSellerId)
//   // console.log(items)
//   return <div> Items by {nSellerId}: {allItems.map((sellerItems)=><li>{sellerItems}</li>)}</div>

// })
// }



// class SellerDetails extends Component {
//   render = ()=> {
//     return (
//       <div className="card center">
//       {formatItems(this.props)}
//       </div>
//     );
//   }
// }

export default SellerDetails;


// yourArray.forEach( function (eachObj){
//   for (var key in eachObj) {
//       if (eachObj.hasOwnProperty(key)){
//          console.log(key,eachObj[key]);
//       }
//   }
// });