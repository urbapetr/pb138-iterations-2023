import { Female, Male, Phone } from '@mui/icons-material';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Tooltip,
  Typography,
} from '@mui/material';

import {
  getFullName,
  getGoogleMapsLink,
  translatePhrase,
} from '../../func/utils';

import React from 'react';

import { RandomUserApiResult } from './../../models/randomuser/api';
import { languageAtom, peoplePreferencesAtom } from '../../state/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

export interface PersonProps {
  source: RandomUserApiResult;
}

export default function Person({ source }: PersonProps) {
  const lang = useRecoilValue(languageAtom);
  const [peoplePreferences, setPeoplePreferences] = useRecoilState(
    peoplePreferencesAtom
  );

  const handleInterested = () => {
    const updatedInterested = new Set(peoplePreferences.interested);
    updatedInterested.add(source.login.uuid);
    setPeoplePreferences({
      ...peoplePreferences,
      interested: updatedInterested,
    });
  };

  const handleNotInterested = () => {
    const updatedNotInterested = new Set(peoplePreferences.notInterested);
    updatedNotInterested.add(source.login.uuid);
    setPeoplePreferences({
      ...peoplePreferences,
      notInterested: updatedNotInterested,
    });
  };

  const isInteresting = peoplePreferences.interested.has(source.login.uuid);
  const fullName = getFullName(source);
  const bornDate = new Date(source.dob.date);

  return (
    <Box component={Card} mb={3} mx={0}>
      <CardMedia
        component="img"
        alt={translatePhrase(lang, 'PersonPicture', fullName)}
        height="300"
        image={source.picture.large}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="secondary.main"
        >
          {fullName}
        </Typography>
        <Typography component="div" variant="body2" color="text.secondary">
          <Box
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
            mb={2}
          >
            {source.gender === 'female' ? (
              <>
                <Tooltip title={translatePhrase(lang, 'PersonGender')}>
                  <Female sx={{ mr: 2 }} />
                </Tooltip>
                {translatePhrase(lang, 'PersonFemale')}
              </>
            ) : (
              <>
                <Tooltip title={translatePhrase(lang, 'PersonGender')}>
                  <Male sx={{ mr: 2 }} />
                </Tooltip>
                {translatePhrase(lang, 'PersonMale')}
              </>
            )}
          </Box>

          <Box
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
            mb={4}
          >
            <Tooltip title={translatePhrase(lang, 'PersonAge')}>
              <CakeIcon sx={{ mr: 2 }} />
            </Tooltip>
            {bornDate.getDate()}/{bornDate.getMonth() + 1}/
            {bornDate.getFullYear()} ({source.dob.age})
          </Box>

          <Typography component="h3" variant="h6" color="fi.main">
            {translatePhrase(lang, 'ContactMe')}
          </Typography>

          <Box
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
            my={2}
          >
            <Tooltip title={translatePhrase(lang, 'PersonMail')}>
              <MailIcon sx={{ mr: 2 }} />
            </Tooltip>
            <Tooltip title={translatePhrase(lang, 'WriteMail')}>
              <Link
                href={`mailto:${source.email}`}
                target="_blank"
                color="info.main"
              >
                {source.email}
              </Link>
            </Tooltip>
          </Box>

          <Box
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
            mb={2}
          >
            <Tooltip title={translatePhrase(lang, 'PersonPhone')}>
              <Phone sx={{ mr: 2 }} />
            </Tooltip>
            {source.phone}
          </Box>

          <Box
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
            mb={2}
          >
            <Tooltip title={translatePhrase(lang, 'PersonLocation')}>
              <LocationOnIcon sx={{ mr: 2 }} />
            </Tooltip>

            <Tooltip title={translatePhrase(lang, 'ShowOnMap')}>
              <Link
                href={getGoogleMapsLink(
                  `${source.location.city},${source.location.country}`
                )}
                target="_blank"
                color="info.main"
              >
                {source.location.city} ({source.location.country})
              </Link>
            </Tooltip>
          </Box>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
      >
        <Button
          size="small"
          color={isInteresting ? 'primary' : 'secondary'}
          onClick={handleInterested}
        >
          <ThumbUpIcon sx={{ mr: 2 }} />
          {translatePhrase(lang, 'Interested')}
        </Button>
        {isInteresting ? null : (
          <Button size="small" color="secondary" onClick={handleNotInterested}>
            <ThumbDownIcon sx={{ mr: 2 }} />
            {translatePhrase(lang, 'NotInterested')}
          </Button>
        )}
      </CardActions>
    </Box>
  );
}
