import React from 'react';
import { Typography } from '@mui/material';
import { translatePhrase } from '../../func/utils';

export default function Welcome() {
  // <TODO>
  // Use shared (Recoil) value instead of constant value
  // to get actual 'language'.
  const lang = 'En';

  // </TODO>

  React.useEffect(() => {
    document.title = translatePhrase(lang, 'Brand');
  }, []);

  return (
    <Typography component="p" variant="h6" sx={{ mb: 3 }} fontStyle="italic">
      {translatePhrase(lang, 'WelcomeText')}
    </Typography>
  );
}
