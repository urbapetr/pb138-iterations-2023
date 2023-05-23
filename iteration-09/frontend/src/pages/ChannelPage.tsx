import React, { FC } from 'react';
import CreateChannelForm from '../components/CreateChannelForm';
import { StarWarsApi } from '../services';
import { Channel } from '../models';
import Message from '../components/Message';

interface IProps {
    channelId: string;
}

const ChannelPage: FC<IProps> = ({ channelId }) => {
  const channel = StarWarsApi.getSingleChannel(channelId);

  return (
    <div>
      <h2>{channel.name}</h2>
      <ul>
        {channel.messages.map((message) => <Message key={message.id} message={message}/>)}
      </ul>
    </div>
  );
}

export default ChannelPage;
