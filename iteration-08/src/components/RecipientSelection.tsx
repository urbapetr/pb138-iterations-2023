import React from 'react';
import type { GiftRecipient } from '../types/GiftRecipient';
import { FormWrapper } from 'FormWrapper';
import SearchBar from '../hooks/searchUser';

interface RecipientSelectionProps {
  users: GiftRecipient[];
}

export function RecipientSelection({ users }: RecipientSelectionProps) {
  console.log(users);

  return (
    <FormWrapper title="Select Recipient">
      <SearchBar />
    </FormWrapper>
  );
}

export default RecipientSelection;
