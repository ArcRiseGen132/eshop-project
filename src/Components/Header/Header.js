import React from "react"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory"
import SearchIcon from "@mui/icons-material/Search"
import "./Header.css"
import { Link } from "react-router-dom"
import { useStateValue } from "../../Hooks/StateProvider"

const Header = () => {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StoreMallDirectoryIcon className="header__logo" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search..."
        />
        <SearchIcon />
      </div>
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
      </div>

      <div className="nav__item">
        <span className="nav__itemLineOne">Your</span>
        <span className="nav__itemLineTwo">Shop</span>
      </div>
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <div className="nav__itemBasket">
          <ShoppingBasketIcon />
          <span className="nav__itemLineTwo nav__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default Header
