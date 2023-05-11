import { FormWrapper } from 'FormWrapper';
import type { CartItem } from '../types/CartItem';

type OrderSummaryProps = {
  cart: CartItem[]
}

export function OrderSummary({ cart }: OrderSummaryProps){
  return (
    <FormWrapper title="Order Summary">
      <ul style={{ listStyle: 'none', padding: "0" }}>
        {cart?.map((item) => (
          <li key={item.id} style={{ border: "1px solid white", padding: "1rem", borderRadius: "0.5rem", margin: "0.5rem"}}>
            <img src={item.thumbnailUri} alt='thumbnail' style={{ maxHeight: "100%", maxWidth: "100%" }}></img>
            {item.name} #{item.quantity} - ${Math.round((item.price * item.quantity + Number.EPSILON) * 100) / 100}
          </li>
        ))}
      </ul>
      <h3 style={{ textAlign: "right" }}>
        $
        {cart?.reduce(
          (total, item) => total + Math.round((item.price * item.quantity + Number.EPSILON) * 100) / 100,
          0
        )}
      </h3>
    </FormWrapper>
  );
}
