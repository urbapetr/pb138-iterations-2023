import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function ChannelList() {
  const { data: channels, isLoading, isError } = useQuery('channels', async () => {
    const response = await axios.get('/api/channels');
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching channels</div>;
  }

  return (
    <div>
      {channels.map((channel: any) => (
        <div key={channel.id}>{channel.name}</div>
      ))}
    </div>
  );
}

export default ChannelList;
