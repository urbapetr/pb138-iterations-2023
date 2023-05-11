import { ItemWrapper } from 'ItemWrapper';
import type { CartItem } from '../types/CartItem';
import type { PaymentMethod } from 'types/PaymentMethod';

type BillingData = {
  fullName: string,
  email: string,
  phone: string
}

type BillingInfoFormProps = BillingData & {
  updateData: (data: Partial<BillingData>) => void
}

export function BillingInfoForm({ fullName, email, phone, updateData }: BillingInfoFormProps){
  return (
    <ItemWrapper title="Fill in billing info">
      <label>Name and surename:</label>
      <input autoFocus required type='text' value={fullName} onChange={e => updateData({ fullName: e.target.value })}></input>
      <label>Email:</label>
      <input required type='text' value={email} onChange={e => updateData({ email: e.target.value })}></input>
      <label>Phone number:</label>
      <input type='text' value={phone} onChange={e => updateData({ phone: e.target.value })}></input>
      
    </ItemWrapper>
  );
}
