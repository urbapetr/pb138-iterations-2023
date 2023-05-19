import { useState, type FC } from 'react';
import { FormsHandler } from 'formsHandler';
import { OrderSummary } from './components/OrderSummary'
import { RecipientSelection } from './components/RecipientSelection'
import { PaymentMethodSelection } from './components/PaymentMethodSelection'
import { BillingInfoForm } from './components/BillingInfoForm'
import Confirmation from './components/Confirmation'

// Use this import to load the cart content
import cart from 'assets/cart.json';

// Use this import to load the list of users who can receive a gift from you
import userlist from 'assets/gift_recipients.json';

type BillingData = {
  fullName: string,
  email: string,
  phone: string
}

const INIT_BILLING_DATA: BillingData = {
  fullName: "",
  email: "",
  phone: ""
}

export type AppProps = {};

export const App: FC<AppProps> = () => {
  const [cartData, setCartData] = useState(cart)
  const [userData, setUserData] = useState(userlist)
  const [billingData, setBillingData] = useState(INIT_BILLING_DATA)
  function updateBillingData(data: Partial<BillingData>) {
    setBillingData(prev => {
      return { ...prev, ...data}
    })
  }
  const {
    steps, currStepIndex, currStep, firstForm,lastForm , back, next
  } = FormsHandler([
    <OrderSummary cart={cartData} />,
    <RecipientSelection users={userData} />,
    <BillingInfoForm {...billingData} updateData={updateBillingData} />,
    <Confirmation />
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    next()
  }

  return (
    <div style={{
      position: "relative",
      background: "black",
      border: "1px solid white",
      fontFamily: "Brush Script MT",
      color: 'white',
      padding: "2rem",
      margin: "0rem",
      borderRadius: "0.5rem"
    }}>
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", left: "0.5rem" }}>
          {currStepIndex + 1} / {steps.length}
        </div>
        <div style={{
          position: "relative",
          background: "black",
          border: "1px solid white",
          padding: "2rem",
          margin: "1rem 5rem",
          borderRadius: "0.5rem"
        }}>
          {currStep}
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", justifyContent: "flex-end",}}>
            {!firstForm && <button type='button' onClick={back} style={{fontFamily: "Brush Script MT",}}> Back </button>}
            {firstForm && <button type='button' onClick={back} style={{fontFamily: "Brush Script MT",}}> Purchase </button>}
            <button type='submit' style={{fontFamily: "Brush Script MT",}}> {lastForm ? "Finish" : firstForm ? "Gift to" : "Next"} </button>
          </div>
        </div>
      </form>
    </div>
  );
};
