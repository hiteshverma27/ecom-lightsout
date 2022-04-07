import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../contexts";

function ProductCard({ item }) {
  const { cartDispatch } = useCart();
  const { _id, catagoryName, title, price, inStock, rating } = item;
  const location = useLocation();
  return (
    <div key={_id}>
      <div className="card-v">
        <span className="card-v-badge">
          {location.pathname === "/wishlist" ? (
            <span
              onClick={() =>
                cartDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
              }
              className="material-icons-outlined icon-s3 card-badge-icon color-red"
            >
              favorite
            </span>
          ) : (
            <span
              onClick={() => {
                return cartDispatch({ type: "ADD_TO_WISHLIST", payload: item });
              }}
              className="material-icons-outlined icon-s3 card-badge-icon"
            >
              favorite_border
            </span>
          )}
        </span>
        {inStock ? null : (
          <div className="card-overlay">
            <p className="card-overlay-text">Out of stock</p>
          </div>
        )}
        <img
          alt={title}
          src={
            "https://cdn.shopify.com/s/files/1/0410/0250/0260/products/F10003_1_720x720.jpg?v=1641215829"
          }
        />
        <span className="card-rating">
          <span className="material-icons-outlined icon-s1 icon-card-rating">
            star
          </span>
          {rating}
        </span>
        <h4>{title}</h4>
        <p>{catagoryName}</p>
        <p className="card-price">
          ₹{price} <strike>2999</strike>
        </p>
        {inStock ? (
          <button
            className="btn-primary-confirm"
            onClick={() =>
              location.pathname === "/wishlist"
                ? cartDispatch({ type: "MOVE_TO_CART", payload: item })
                : cartDispatch({ type: "ADD_TO_CART", payload: item })
            }
          >
            <span className="material-icons-outlined icon-s3">
              shopping_cart
            </span>{" "}
            {location.pathname === "/wishlist" ? "Move to Cart" : "Add to cart"}
          </button>
        ) : (
          <button className="btn-primary-confirm">
            <span className="material-icons-outlined icon-s3">
              notifications
            </span>{" "}
            Get Notified
          </button>
        )}
      </div>
    </div>
  );
}
ProductCard.defaultProps = {
  item: {
    catagoryName: "catagory",
    title: "title",
    price: "1000",
    inStock: false,
    isFavourite: false,
    prodImg:
      "https://cdn.shopify.com/s/files/1/0410/0250/0260/products/F10003_1_720x720.jpg?v=1641215829",
    rating: 4,
  },
};
export { ProductCard };
