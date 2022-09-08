import React from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../../Hooks/StateProvider"
import { getBasketTotal } from "../../Hooks/Reducer"

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>$0</strong>
            </p>
            <small className="subtotal__gift">
              <input
                type="checkbox"
                id="giftCheckbox"
                name="giftCheckbox"
              ></input>
              <label for="giftCheckbox"> This order contains a gift</label>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
