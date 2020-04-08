import React, { Component } from 'react'
import CreditCard from './CreditCard'
import CreditCardForm from './CreditCardForm'
import './App.css'

const normalizeCardNumber = cardNumber =>
  cardNumber.replace(/[^0-9]/g, '').slice(0, 16)

const normalizeCardHolder = cardHolder =>
  cardHolder.replace(/[^a-z\s]/gi, '').slice(0, 15)

const normalizeMonth = month => {
  if (month.length <= 1) return month
  const normalizedMonth = Math.max(1, Math.min(12, month))
    .toString()
    .padStart(2, '0')
  return normalizedMonth
}
const normalizeYear = year => {
  if (year.length <= 1) return year
  return Math.max(18, Math.min(50, year))
}

const normalizeValidThru = validThru => {
  validThru = validThru.replace(/[^0-9]/g, '').slice(0, 4)
  let month = validThru.slice(0, 2)
  let year = validThru.slice(2)
  return normalizeMonth(month) + normalizeYear(year)
}
class App extends Component {
  state = {
    cardNumber: '',
    cardHolderName: '',
    validThru: ''
  }
  constructor(props) {
    super(props)

    this.setCardNumber = this.setCardNumber.bind(this)
    this.setCardHolderName = this.setCardHolderName.bind(this)
    this.setValidThru = this.setValidThru.bind(this)
  }

  setCardNumber(newCardNumber) {
    this.setState({
      cardNumber: normalizeCardNumber(newCardNumber)
    })
  }

  setCardHolderName(newCardHolderName) {
    this.setState({
      cardHolderName: normalizeCardHolder(newCardHolderName)
    })
  }

  setValidThru(newValidThru) {
    this.setState({
      validThru: normalizeValidThru(newValidThru)
    })
  }

  render() {
    let { cardNumber, cardHolderName, validThru } = this.state
    let { setCardNumber, setCardHolderName, setValidThru } = this

    return (
      <div>
        <div className="app-container">
          <div className="app-content-item">
            <CreditCard
              cardNumber={cardNumber}
              cardHolder={cardHolderName}
              validThru={validThru}
            />
          </div>
          <div className="app-content-item">
            <CreditCardForm
              cardNumber={cardNumber}
              onChangeCardNumber={setCardNumber}
              cardHolder={cardHolderName}
              onChangeCardHolder={setCardHolderName}
              validThru={validThru}
              onChangeValidThru={setValidThru}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
