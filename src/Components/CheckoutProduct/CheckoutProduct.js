import React from "react"

const CheckoutProduct = ({ title, price, rating, image }) => {
  return (
    <div className="checkoutProduct">
      <img
        src="https://atlas-content-cdn.pixelsquid.com/stock-images/tcife-satchel-women-handbag-ZRveND8-600.jpg"
        alt=""
        className="checkoutProduct__image"
        height="200px"
        width="200px"
      />
      <div className="product__info">
        <div className="checkoutProduct__title">
          <p>Product Title</p>
          <p className="checkoutProduct__price">
            <strong>$ </strong>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">{rating}</div>
          <button>Remove Item</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
