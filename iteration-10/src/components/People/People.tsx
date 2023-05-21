import { Alert, AlertColor, Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { translatePhrase } from '../../func/utils';

import staticPeopleResponse from '../../data/staticPeopleResponse.json';
import {
  RandomUserApiResponse,
  RandomUserApiResult,
} from '../../models/randomuser/api';

import Person from '../Person';

export default function People() {
  // <TODO>
  // Use shared (Recoil) value instead of constant value
  // to get actual 'language'.
  const lang = 'En';

  // </TODO>

  const PEOPLE_TO_LOAD = 30;

  // <TODO>
  /* [STATIC DATA APPROACH]
   * 1) Use <staticPeopleResponse> (preloaded data from randomuser API)
   * and update 'people' shared value using Recoil setter (with useEffect hook).
   * 2) Remove (ignore) <PEOPLE_TO_LOAD> constant.
   *
   * As this approach is too simple, 1 point is deducted, but also
   * this allows you to meet remaining requirements.
   *
   * [TRULY RANDOM DATA APPROACH]
   * Install and use Axios to load <PEOPLE_TO_LOAD> people from randomuser API
   * and update 'people' shared value using Recoil setter (with useEffect hook).
   * You can avoid using TanStack Query but then you risk the consequences.
   *
   * Documentation for randomuser API: 'https://randomuser.me/'.
   * Axios: 'https://axios-http.com/docs/api_intro'.
   * TanStack Query: 'https://tanstack.com/query/latest/docs/react/overview'.
   *
   * Beside that, with <msgContent>, <msgSeverity> and method translatePhrase():
   * 1) Show loading message (phrase 'LoadingPeople').
   * 2) Handle not Ok status response (phrase 'UnableToLoadPeople').
   *    Hint: You should use <phraseArgs> argument in the translatePhrase()
   *    method there (to report response status).
   * 3) Handle unexpected error (phrase 'ErrorWhileLoadingPeople').
   * 4) Hide 'Loading people' message when successfully loaded.
   */
  const msgContent: string | JSX.Element | null = null;
  const msgSeverity: AlertColor = 'info';

  // </TODO>

  // <TODO>
  // Use people (Recoil) selector instead of an empty array
  // to define people to be shown.
  const peopleToShow: RandomUserApiResult[] = [];

  // </TODO>

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
