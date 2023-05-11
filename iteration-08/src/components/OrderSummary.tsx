import type { CartItem } from '../types/CartItem';
import type { GiftRecipient } from '../types/GiftRecipient';

interface OrderSummaryProps {
    cartItems: CartItem[];
    giftRecipient?: GiftRecipient;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems, giftRecipient }) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {cartItems.map((item) => (
                <li key={item.id}>
                    {item.name} x {item.quantity} - ${item.price * item.quantity}
                </li>
                ))}
            </ul>
            {giftRecipient && (
                <div>
                <h3>Gift Recipient:</h3>
                <p>{giftRecipient.name}</p>
                </div>
            )}
            <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
        </div>
    );
};

export default OrderSummary;
