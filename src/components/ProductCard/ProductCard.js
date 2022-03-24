import React from 'react'

export function ProductCard({id,catagoryName, title,price, inStock, isFavourite, prodImg, rating }) {
  return (
    <div key={id}>
         <div className="card-v">
               <span className="card-v-badge">
                  {isFavourite?<span className="material-icons-outlined icon-s3 card-badge-icon color-red">favorite</span>:<span className="material-icons-outlined icon-s3 card-badge-icon">favorite_border</span>}
               </span>
               {inStock?null:<div className="card-overlay">
                  <p className="card-overlay-text">Out of stock</p>
               </div>}
               <img alt={title}
                  src={prodImg} />
               <span className="card-rating">
                  <span className="material-icons-outlined icon-s1 icon-card-rating">star</span>{rating}
               </span>
               <h4>{title}</h4>
               <p>{catagoryName}</p>
               <p className="card-price">₹{price} <strike>2999</strike></p>
               {inStock?<button className="btn-primary-confirm">
                  <span className="material-icons-outlined icon-s3">shopping_cart</span> Add to cart
               </button>:<button className="btn-primary-confirm">
                  <span className="material-icons-outlined icon-s3">notifications</span> Get Notified
               </button>}
               
            </div>      
            
    </div>
  )
}
  ProductCard.defaultProps={
      catagoryName:"catagory",
      title:"title",
      price:"1000",
      inStock:false,
      isFavourite:false,
      prodImg:"https://cdn.shopify.com/s/files/1/0410/0250/0260/products/F10003_1_720x720.jpg?v=1641215829",
      rating:4
  }
