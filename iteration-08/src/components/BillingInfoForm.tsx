import { ItemWrapper } from 'ItemWrapper';

type BillingData = {
  fullName: string;
  email: string;
  phone: string;
};

type BillingInfoFormProps = BillingData & {
  updateData: (data: Partial<BillingData>) => void;
};

export function BillingInfoForm({
  fullName,
  email,
  phone,
  updateData,
}: BillingInfoFormProps) {
  return (
    <ItemWrapper title="Fill in billing info">
      <label>
        Name and surename:
        <input
          required
          type="text"
          value={fullName}
          onChange={(e) => updateData({ fullName: e.target.value })}
        ></input>
      </label>
      <label>
        Email:
        <input
          required
          type="text"
          value={email}
          onChange={(e) => updateData({ email: e.target.value })}
        ></input>
      </label>
      <label>
        Phone number:
        <input
          type="text"
          value={phone}
          onChange={(e) => updateData({ phone: e.target.value })}
        ></input>
      </label>
    </ItemWrapper>
  );
}
