import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './components/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
