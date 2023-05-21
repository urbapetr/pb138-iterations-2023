import { Alert, AlertColor, Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { languageAtom, peopleAtom } from '../../state/atoms';
import { peopleToShowSelector } from '../../state/selectors';

import { translatePhrase } from '../../func/utils';
import {
  RandomUserApiResponse,
  RandomUserApiResult,
} from '../../models/randomuser/api';

import Person from '../Person';

import axios from 'axios';

export default function People() {
  const lang = useRecoilValue(languageAtom);
  const [, setPeople] = useRecoilState<RandomUserApiResult[]>(peopleAtom);

  const PEOPLE_TO_LOAD = 30;

  const [msgContent, setMsgContent] = useState<string | JSX.Element | null>(
    'LoadingPeople'
  );
  const [msgSeverity, setMsgSeverity] = useState<AlertColor>('info');

  const fetchPeople = async () => {
    try {
      const response = await axios.get<RandomUserApiResponse>(
        `https://randomuser.me/api/?results=${PEOPLE_TO_LOAD}`
      );
      if (response.status === 200) {
        const data = response.data.results;
        setPeople(data);
        setMsgContent(null);
      } else {
        setMsgContent(
          translatePhrase(lang, 'UnableToLoadPeople', response.status)
        );
        setMsgSeverity('error');
      }
    } catch (error) {
      console.error(error);
      setMsgContent(translatePhrase(lang, 'ErrorWhileLoadingPeople'));
      setMsgSeverity('error');
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const peopleToShow = useRecoilValue(peopleToShowSelector);

  return (
    <Box mb={3}>
      {msgContent === null ? null : (
        <Box component={Alert} mb={3} severity={msgSeverity}>
          {msgContent}
        </Box>
      )}

      {peopleToShow.length === 0 ? (
        <Box component={Alert} severity="warning" mb={2}>
          {translatePhrase(lang, 'NoPeopleToShow')}
        </Box>
      ) : (
        <Box>
          <Typography
            component="p"
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            {peopleToShow.length > 1
              ? translatePhrase(lang, 'ShowingMorePeople', peopleToShow.length)
              : translatePhrase(lang, 'ShowingOnePerson')}
          </Typography>
          <Grid container spacing={3}>
            {peopleToShow.map((p) => (
              <Grid item xs={12} md={6} lg={4} key={p.login.uuid}>
                <Person source={p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
