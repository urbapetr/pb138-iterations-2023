import type { PaymentMethod } from "../types/PaymentMethod";
import { useState } from "react";

const PaymentMethodSelection = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);

    return (
        <div>
            <div>Select Payment Method:</div>
            <label>
                <input
                    type="radio"
                    value="credit-card"
                    checked={selectedPaymentMethod?.type === "Credit Card"}
                    onChange={() =>
                    setSelectedPaymentMethod({
                        type: "Credit Card",
                        cardNumber: "",
                        expirationDate: "",
                        cvv: "",
                    })
                    }
                />
                Credit Card
            </label>
            <label>
                <input
                    type="radio"
                    value="google-pay"
                    checked={selectedPaymentMethod?.type === "Google Pay"}
                    onChange={() =>
                    setSelectedPaymentMethod({
                        type: "Google Pay",
                    })
                    }
                />
                Google Pay
            </label>
            <button disabled={!selectedPaymentMethod}>Submit Payment Method</button>
        </div>
)
};

export default PaymentMethodSelection;

  
