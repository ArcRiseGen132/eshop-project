import "./App.css"
import Header from "./Components/Header/Header.js"
import Home from "./Components/Home/Home.js"
import Checkout from "./Components/Checkout/Checkout.js"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
