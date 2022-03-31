function PriceDetailsCard({ noOfItems, totalAmount }) {
  return (
    <div className="w-20vw mx-2 p-2 price-details">
      <h3>Price Details</h3>
      <hr className="my-1" />
      <div className="flex-space_between-center">
        <p>Price ({noOfItems} Item(s))</p>
        <p>₹ {totalAmount}</p>
      </div>
      <div className="flex-space_between-center">
        <p>Discount</p>
        <p>₹ 0</p>
      </div>
      <div className="flex-space_between-center">
        <p>Delivery Charges</p>
        <p>₹ {100}</p>
      </div>
      <hr className="my-1" />
      <div className="flex-space_between-center">
        <h3>Total Amount</h3>
        <h3>₹ {totalAmount + 100}</h3>
      </div>
      <hr className="my-1" />
      <h4>You will save ₹ 0 on this order</h4>
      <button className="btn-primary-confirm my-1 w-100per">Place Order</button>
    </div>
  );
}

export { PriceDetailsCard };
