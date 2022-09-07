import React from "react"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory"
import SearchIcon from "@mui/icons-material/Search"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <StoreMallDirectoryIcon className="header__logo" fontSize="large" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search..."
        />
        <SearchIcon />
      </div>
      <div className="header__nav"></div>
      <div className="nav__item">
        <span className="nav__itemLineOne">Hello Guest</span>
        <span className="nav__itemLineTwo">Sign In</span>
      </div>
      <div className="nav__item">
        <span className="nav__itemLineOne">Your</span>
        <span className="nav__itemLineTwo">Shop</span>
      </div>
      <div className="nav__itemBasket">
        <ShoppingBasketIcon />
        <span className="nav__itemLineTwo nav__basketCount">0</span>
      </div>
    </div>
  )
}

export default Header
