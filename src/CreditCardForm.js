import React from "react"
import _ from "lodash"

import "./CreditCardForm.css"

const noop = () => {}

const renderCardNumber = cardNumber =>
  _.chunk(cardNumber, 4)
    .map(s => s.join(""))
    .join(" ")

const renderValidThru = validThru =>
  validThru.length < 3
    ? validThru
    : validThru.slice(0, 2) + " / " + validThru.slice(2, 4)

const CreditCardForm = props => {
  const onChangeCardNumber = props.onChangeCardNumber || noop
  const onChangeValidThru = props.onChangeValidThru || noop
  const onChangeCardHolder = props.onChangeCardHolder || noop

  return (
    <div className="credit-card-form">
      <div className="credit-card-form__row">
        <input
          className="credit-card-form__input"
          type="text"
          placeholder="Card Number"
          value={renderCardNumber(props.cardNumber)}
          onChange={e => onChangeCardNumber(e.target.value)}
        />
      </div>
      <div className="credit-card-form__row">
        <input
          className="credit-card-form__input"
          type="text"
          placeholder="Name"
          value={props.cardHolder}
          onChange={e => onChangeCardHolder(e.target.value)}
        />
      </div>
      <div className="credit-card-form__row">
        <input
          className="credit-card-form__input credit-card-form__input--2-thirds"
          type="text"
          placeholder="Valid Thru"
          value={renderValidThru(props.validThru)}
          onChange={e => onChangeValidThru(e.target.value)}
        />
      </div>
    </div>
  )
}

export default CreditCardForm