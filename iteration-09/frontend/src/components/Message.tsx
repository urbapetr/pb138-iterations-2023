import React, { FC } from 'react';
import CreateChannelForm from '../components/CreateChannelForm';
import { StarWarsApi } from '../services';
import { Channel, Message } from '../models';

interface IProps {
    message: Message;
}

const Message: FC<IProps> = ({ message }) => {
  return (
    <div className="message">
      <div className="message__avatar">
          <span>{message.sender.picture}</span>
      </div>
      <div className="message__content">
          <div className="message__header">
          <span className="message__author">{message.sender.name}</span>
          <span className="message__timestamp">{message.createdAt}</span>
          </div>
          <div className="message__text">
          <p>{message.content}</p>
          </div>
      </div>
      <div className="message__toolbar">
          {message.reactions.map((reaction) => 
              <button className="message__action">
                  <p>{reaction.emoji.code}</p>
              </button>
          )}
      </div>
    </div>
  );
}

export default Message;
