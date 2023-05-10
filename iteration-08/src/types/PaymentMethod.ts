export type CreditCardPaymentMethod = {
  type: 'Credit Card';
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

// TODO: Define at least one more payment method and add it to the union type below
export type GooglePayPaymentMethod = {
  type: 'Google Pay';
};

export type PaymentMethod = CreditCardPaymentMethod | GooglePayPaymentMethod;
