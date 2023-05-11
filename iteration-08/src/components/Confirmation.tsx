import React from 'react';
import type { OrderFormData } from '../types/OrderFormData';

interface ConfirmationProps {
    orderData: OrderFormData;
  }

  const Confirmation: React.FC<ConfirmationProps> = ({ orderData }) => {
    return (
      <div>
        <h2>Confirmation</h2>
        <p>Thank you for your order!</p>
        <p>We will send a confirmation email to {orderData.email}.</p>
        <p>
          Your order will be shipped to:
          <br />
          {orderData.billingAddress.address}
          <br />
          {orderData.billingAddress.city}, {orderData.billingAddress.stateOrProvince} {orderData.billingAddress.zipCode}
          <br />
          {orderData.billingAddress.country}
        </p>
        <p>
          You ordered the following items:
          <ul>
            {orderData.products.map((productId) => (
              <li key={productId}>{productId}</li>
            ))}
          </ul>
        </p>
      </div>
    );
  };

  export default Confirmation;
