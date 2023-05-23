import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import ChannelCard from '../components/ChannelCard';
import { StarWarsApi } from '../services';

function Sidebar() {
  const { data: channels } = useQuery({
    queryKey: ['channels'],
    queryFn: () => StarWarsApi.getChannels()
  })

  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <h1>Star Wars</h1>
      </div>
      <h2 className="text-xl text-green-600">Channels</h2>
      <ul className="sidebar__list">
      { channels?.data.map(channel => <ChannelCard key={channel.id} channel={channel} />) || <></> }
      </ul>
    </nav>
  );
}

export default Sidebar;