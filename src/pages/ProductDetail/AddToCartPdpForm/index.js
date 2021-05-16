import React, { useState } from "react";
import ButtonFilled from "../../../components/Button/ButtonFilled";

export default function AddToCartPdpForm() {
  const [qtyValue, setQtyValue] = useState(1);

  const valueGreat1 = qtyValue > 1 ? true : false;

  const incrementValue = (e) => {
    e.preventDefault();
    setQtyValue(qtyValue + 1);
  };

  const decrementValue = (e) => {
    e.preventDefault();
    setQtyValue(valueGreat1 ? qtyValue - 1 : qtyValue);
  };

  return (
    <div className="add-to-cart-pdp-form">
      <form action="">
        <div className="input-qty">
          <input type="number" name="add-qty-cart" min={1} value={qtyValue} />
          <div className="increment-buttons">
            <input
              type="button"
              onClick={incrementValue}
              value="+"
              class="button-plus"
              data-field="quantity"
            />
            <input
              type="button"
              onClick={decrementValue}
              value="-"
              class="button-minus"
              data-field="quantity"
              disabled={!valueGreat1}
            />
          </div>
        </div>
        <div className="button-add">
          <ButtonFilled type="submit" label="Adicionar" />
        </div>
      </form>
    </div>
  );
}
