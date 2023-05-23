import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from './components/Layout';
import NoPage from './pages/NoPage';
import ChannelCreatePage from './pages/ChannelCreatePage';
import ChannelPage from './pages/ChannelPage';

const queryClient = new QueryClient();

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChannelPage channelId={""} />} />
          <Route path="newChannel" element={<ChannelCreatePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
}

export default App;
