import React from "react"
import "./Product.css"

const Product = () => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">$30</p>
          <div className="product__rating">⭐⭐</div>
        </div>
        <img
          src="https://atlas-content-cdn.pixelsquid.com/stock-images/tcife-satchel-women-handbag-ZRveND8-600.jpg"
          alt="product"
        />
        <button>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product
