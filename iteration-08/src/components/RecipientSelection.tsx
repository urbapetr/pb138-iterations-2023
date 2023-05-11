import React from 'react';
import type { GiftRecipient } from '../types/GiftRecipient';

interface RecipientSelectionProps {
    onRecipientSelected: (recipient: GiftRecipient) => void;
}  
  
const RecipientSelection: React.FC<RecipientSelectionProps> = ({ onRecipientSelected }) => {
    // Here you can fetch the list of recipients from an API or use a pre-defined list
    const recipients: GiftRecipient[] = [
        {
        id: '1',
        name: 'John Doe',
        username: 'johndoe',
        avatarUri: 'https://example.com/avatar.jpg',
        },
        {
        id: '2',
        name: 'Jane Doe',
        username: 'janedoe',
        avatarUri: 'https://example.com/avatar.jpg',
        },
    ];

    const handleRecipientSelect = (recipient: GiftRecipient) => {
        onRecipientSelected(recipient);
    };

    return (
        <div>
        <h2>Select a recipient:</h2>
        <ul>
            {recipients.map((recipient) => (
            <button key={recipient.id} onClick={() => handleRecipientSelect(recipient)}>
                <img src={recipient.avatarUri} alt={recipient.name} />
                <p>{recipient.name}</p>
            </button>
            ))}
        </ul>
        </div>
    );
};
  
    
export default RecipientSelection