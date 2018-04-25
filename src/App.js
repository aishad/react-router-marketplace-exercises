import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';
import ItemDetails from './ItemDetails.js'
import Reviewer from './Reviewer.js'
import SellerDetails from './SellerDetails.js'
import {sellers} from './Seller.js'


 let items = [{
  description: "Nice boats. 50% off. wow.",
  price: 10000,
  image: "boat.png",
  sellerId: 0,
  stock: 10,
  reviewList : [0,1,4]
},
{
  description: "Lawn chairs",
  price: 50,
  image: "lawnchair.jpg",
  sellerId: 1,
  stock: 50,
  reviewList : [0,1,2]
},
{
  description: "Fresh Bagels",
  price: 20,
  image: "bagels.jpg",
  sellerId: 2,
  stock: 2,  
  reviewList : [0,1,2]
}
,
{
  description: "Fresh fruit",
  price: 10,
  image: "oranges.jpg",
  sellerId: 2,
  stock: 25,
  reviewList : [0,1,2]

},
{
  description: "Melted Popsicle",
  price: 5,
  image: "popsicle.jpg",
  sellerId: 2,
  stock: 1,
  reviewList : [0,1,2]
}
]

let renderAllItems = () => {
  let renderedItems = items.map((item, idx)=> (<Item
    price={item.price}
    sellerId={item.sellerId}
    imageLocation={item.image}
    description={item.description}
    stock={item.stock}
    review={item.review}
    itemId={idx}
    reviewList = {item.reviewList}

    />))
  return(<div>    <Link to="/allsellers">All Sellers</Link>
{renderedItems}</div>)
}



let renderItemDetails = routerData =>{
  return (<ItemDetails  idList={routerData.match.params.idList}
    //let theWholeItem = items[routerData.match.params.id]
  //return (<ItemDetails item={theWholeItem})
     />)
}

let reviewerDetails = routerData =>{
  return (<Reviewer  reviewerId={routerData.match.params.reviewerId}

     />)
}

let reviewSellerItems = routerData =>{
  return (<SellerDetails sellerId={routerData.match.params.id}/>)
}

let renderSeller = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Seller id={routerData.match.params.id} />)

}


let renderAllSellers=()=>{
  let ret = sellers.map((seller, sellerId)=>
   <div> <Link to={'seller/'+ sellerId}> {seller.name}</Link></div>
  )
  return ret
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/seller/:id' render={renderSeller} />
          <Route exact={true} path='/details/:idList' render={renderItemDetails} />
          <Route exact={true} path='/reviewer/:reviewerId' render={reviewerDetails} />
          <Route exact={true} path='/sellerdetails/:id' render={reviewSellerItems} />
          <Route exact={true} path='/allsellers/' render={renderAllSellers} />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
export {items}