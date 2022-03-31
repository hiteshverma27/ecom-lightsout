function CartProductCard({
  item,
  removeFromCartHandler,
  increaseQtyHandler,
  decreaseQtyHandler,
}) {
  const { _id, catagoryName, title, price, qty } = item;
  return (
    <div
      key={_id}
      className="card-horizontal m-1 hover-img"
      id="card-horizontal"
    >
      <div className="card-h-product-img">
        <img
          className="card-h-img img-cover"
          src="https://cdn.shopify.com/s/files/1/0410/0250/0260/products/F10003_1_720x720.jpg?v=1641215829"
          alt="product"
        />
      </div>
      <div className="card-h-description p-1">
        <h3>{title}</h3>
        <h4>
          ₹ {price} <strike>₹ {price}</strike>
        </h4>

        <p className="card-discount">50% off</p>
        <h4>{catagoryName}</h4>
      </div>
      <div className="card-h-cta">
        <div className="flex-center-center">
          <button
            disabled={qty <= 1 ? true : false}
            className={
              qty <= 1
                ? "m-1 btn-secondary-grey font-size-x-large font-weight-400"
                : "m-1 btn-primary-confirm font-size-x-large font-weight-400"
            }
            onClick={() => decreaseQtyHandler(item)}
          >
            -
          </button>
          <span className="font-size-s3">{qty}</span>
          <button
            className="m-1 btn-primary-confirm font-size-x-large font-weight-400"
            onClick={() => increaseQtyHandler(item)}
          >
            +
          </button>
          <button
            className="ml-auto"
            onClick={() => removeFromCartHandler(item)}
          >
            Remove
          </button>
        </div>
        <button className="my-1 btn-secondary-grey">
          <span className="material-icons icon-s3">favorite_border</span>
          Move to wishlist
        </button>
      </div>
    </div>
  );
}

export { CartProductCard };
