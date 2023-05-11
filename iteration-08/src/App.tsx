import type { FC } from 'react';
import OrderSummary from './components/OrderSummary'
import RecipientSelection from './components/RecipientSelection'
import PaymentMethodSelection from './components/PaymentMethodSelection'
import BillingInfoForm from './components/BillingInfoForm'
import Confirmation from './components/Confirmation'

// Use this import to load the cart content
import cart from 'assets/cart.json';

// Use this import to load the list of users who can receive a gift from you
import userlist from 'assets/gift_recipients.json';

export type AppProps = {};

export const App: FC<AppProps> = () => {
  return (
    <div>
      <OrderSummary cartItems={cart} />
    </div>
  );
};
