import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import {
  Tooltip,
  Avatar,
  Badge,
  Box,
  IconButton,
  Typography,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { RandomUserApiResult } from '../../models/randomuser/api';

import { getFullName, translatePhrase } from '../../func/utils';

import { defaultFilterData } from '../../models/people';

export default function PeopleInterested() {
  // <TODO>
  /* Use shared (Recoil) value instead of constant value
   * to get actual 'language'.
   * Use people (Recoil) selector instead of an empty array
   * to define interesting people to be processed.
   */
  const lang = 'En';
  const peopleInteresting: RandomUserApiResult[] = [];

  // </TODO>

  const onShowInterestingPeople = () => {
    // <TODO>
    /* Use shared (Recoil) setter to update 'people filter data'
     * value so that:
     * 1) Filter is cleared.
     * 2) All interesting people are shown.
     */
    // </TODO>
  };

  if (peopleInteresting.length === 0) {
    return null;
  }

  return (
    <LightTooltip
      title={
        <Box display="flex" alignItems="center" my={1}>
          {peopleInteresting.slice(0, 5).map((p) => {
            return (
              <Avatar
                key={p.login.uuid}
                sx={{ mx: 1, width: 20, height: 20 }}
                alt={translatePhrase(lang, 'PersonPicture', getFullName(p))}
                src={p.picture.thumbnail}
              />
            );
          })}
          {peopleInteresting.length > 5 ? (
            <Typography component="span" variant="subtitle1" sx={{ mx: 1 }}>
              ...
            </Typography>
          ) : null}
        </Box>
      }
    >
      <IconButton onClick={onShowInterestingPeople} color="inherit">
        <Badge badgeContent={peopleInteresting.length} color="primary">
          <ThumbUpIcon />
        </Badge>
      </IconButton>
    </LightTooltip>
  );
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
