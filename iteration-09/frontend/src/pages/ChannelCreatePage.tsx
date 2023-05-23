import React from 'react';
import CreateChannelForm from '../components/CreateChannelForm';
import { StarWarsApi } from '../services';

const handleFormSubmit = (channelName: string, channelDescription: string) => {
  console.log('Channel Name:', channelName);
  console.log('Channel Description:', channelDescription);
  StarWarsApi.createChannel(channelName);
};

function ChannelCreatePage() {
  return (
    <div>
      <h3>Create a new Star Wars-themed channel!</h3>
      <p className="channel-form__motivation-paragraph">This is the place for all fans of the galaxy far, far away. Discuss your favorite moments, debate the best movies, and speculate on the future of the franchise. Join the conversation and May the Force be with you!</p>
      <CreateChannelForm onSubmit={handleFormSubmit}/>
    </div>
  );
}

export default ChannelCreatePage;
