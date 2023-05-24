import React from 'react';
import { Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../../state/atoms';
import { translatePhrase } from '../../func/utils';

export default function Welcome() {
  const lang = useRecoilValue(languageAtom);

  React.useEffect(() => {
    document.title = translatePhrase(lang, 'Brand');
  }, []);

  return (
    <Typography component="p" variant="h6" sx={{ mb: 3 }} fontStyle="italic">
      {translatePhrase(lang, 'WelcomeText')}
    </Typography>
  );
}
