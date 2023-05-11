import React, { useState } from 'react';
import type { OrderFormData } from '../types/OrderFormData';

type Props = {
  onSubmit: (formData: OrderFormData) => void;
};

const BillingInfoForm = ({ onSubmit }: Props) => {
    const [formData, setFormData] = useState<OrderFormData>({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        products: [],
        paymentMethod: { type: 'Credit Card', cardNumber: '', expirationDate: '', cvv: '' },
        billingAddress: { address: '', city: '', stateOrProvince: '', country: '', zipCode: '' },
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
      };
      

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            paymentMethod: { ...prevFormData.paymentMethod, [name]: value },
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={() => handleChange} required />
        </div>
        <div>
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" value={formData.surname} onChange={() => handleChange} required />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={() => handleChange} required />
        </div>
        <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={() => handleChange} required />
        </div>
        <div>
            <label htmlFor="paymentMethod">Payment Method</label>
            <select id="paymentMethod" name="type" value={formData.paymentMethod.type} onChange={() => handlePaymentMethodChange} required>
                <option value="Credit Card">Credit Card</option>
                <option value="Google Pay">Google Pay</option>
            </select>
            {formData.paymentMethod.type === 'Credit Card' && (
                <>
                <div>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={formData.paymentMethod.cardNumber} onChange={() => handlePaymentMethodChange} required />
                </div>
                <div>
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input type="text" id="expirationDate" name="expirationDate" value={formData.paymentMethod.expirationDate} onChange={() => handlePaymentMethodChange} required />
                </div>
                <div>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" value={formData.paymentMethod.cvv} onChange={() => handlePaymentMethodChange} required />
                </div>
                </>
            )}
        </div>
        <button type="submit">Submit</button>
    </form>
    );
}
     
export default BillingInfoForm;
