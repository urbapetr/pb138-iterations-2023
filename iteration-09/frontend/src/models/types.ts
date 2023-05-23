export interface User {
    id: string;
    createdAt: string;
    updatedAt: string;

    name: string;
    email: string;
    picture?: string;

    messages: Message[];
    reactions: MessageReaction[];
  }
  
  export interface Channel {
    id: string;
    createdAt: string;
    updatedAt: string;

    name: string;
    description?: string;

    deletedAt?: string;

    messages: Message[];
  }
  
  export interface Emoji {
    id: string;
    createdAt: string;
    updatedAt: string;

    name: string;
    code: string;

    reactions: MessageReaction[];
  }
  
  export interface Message {
    id: string;
    createdAt: string;
    updatedAt: string;

    content: string;

    deletedAt?: string;
    edited: boolean;

    channel: Channel;
    channelId: string;
    sender: User;
    senderId: string;

    reactions: MessageReaction[];
  }
  
  export interface MessageReaction {
    id: string;
    createdAt: string;
    updatedAt: string;

    emoji: Emoji;
    emojiId: string;

    message: Message;
    messageId: string;
    
    user: User;
    userId: string;
  }
  