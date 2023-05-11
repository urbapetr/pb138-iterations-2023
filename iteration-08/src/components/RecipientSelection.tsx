import React from 'react';
import type { GiftRecipient } from '../types/GiftRecipient';
import { FormWrapper } from 'FormWrapper';

interface RecipientSelectionProps {
  users: GiftRecipient[]
}

export function RecipientSelection({ users }: RecipientSelectionProps){
  console.log(users)
  return (
    <FormWrapper title="Select Recipient">
      <ul style={{ listStyle: 'none', padding: "0" }}>
        {users?.map((item) => (
          <li key={item.id} style={{ border: "1px solid white", padding: "1rem", borderRadius: "0.5rem", margin: "0.5rem" }}>
            <img src={item.avatarUri} alt='avatar' style={{ maxHeight: "100%", maxWidth: "100%" }}></img>
            {item.name} {item.username}
          </li>
        ))}
      </ul>
    </FormWrapper>
  );
}

export default RecipientSelection;
