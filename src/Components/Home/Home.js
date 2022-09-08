import React from "react"
import "./Home.css"
import Product from "../Product/Product"
import Header from "../Header/Header"

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt="Home"
            className="home__image"
          />
          <div className="home__row">
            <Product
              id="1"
              title="Blue Messenger Bag"
              price={11.96}
              rating={4}
              image="https://atlas-content-cdn.pixelsquid.com/stock-images/tcife-satchel-women-handbag-ZRveND8-600.jpg"
            />
            <Product
              id="2"
              title="Microwave"
              price={100}
              rating={5}
              image="https://m.media-amazon.com/images/I/81xxOPvz+9L._AC_SX466_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="Motherboard"
              price={135}
              rating={4}
              image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Product
              id="4"
              title="Ryzen 5 5600"
              price={285}
              rating={5}
              image="https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-666-V01.jpg"
            />
            <Product
              id="5"
              title="MSI MPG PSU"
              price={120}
              rating={3}
              image="https://m.media-amazon.com/images/I/71j1K-hQAhL.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="RTX 3060Ti Gigabyte"
              price={500}
              rating={5}
              image="https://m.media-amazon.com/images/I/71BMLfWIqxL._AC_SS450_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
