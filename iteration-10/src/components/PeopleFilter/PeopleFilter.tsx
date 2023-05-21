import { Clear } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import React from 'react';

import { translatePhrase } from '../../func/utils';

import { defaultFilterData, PeopleFilterData } from '../../models/people';
import { languageAtom, peopleFilterDataAtom } from '../../state/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function PeopleFilter() {
  const lang = useRecoilValue(languageAtom);
  const [globalFilterData, setGlobalFilterData] =
    useRecoilState<PeopleFilterData>(peopleFilterDataAtom);

  const [localFilterData, setLocalFilterData] =
    React.useState<PeopleFilterData>({
      ...globalFilterData,
    });

  const [filtering, setFiltering] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (filtering) {
      setFiltering(false);
    } else {
      setLocalFilterData({ ...globalFilterData });
    }
  }, [globalFilterData]);

  React.useEffect(() => {
    if (filtering) {
      setGlobalFilterData({ ...localFilterData });
    }
  }, [filtering]);

  const handleFilterPeople = () => {
    setFiltering(true);
  };

  const handleClearFilter = () => {
    setGlobalFilterData({ ...defaultFilterData });
  };

  return (
    <Box component={Paper} p={2} elevation={12}>
      <Box
        p={1}
        maxHeight={{ xs: 170, sm: 400, md: 500 }}
        sx={{ overflow: 'auto' }}
      >
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} pr={2} pb={2}>
            <FormControl fullWidth>
              <TextField
                type="number"
                id="filter-min-age"
                label={translatePhrase(lang, 'PersonMinAge')}
                variant="outlined"
                inputProps={{
                  min: 1,
                }}
                value={
                  localFilterData.minAge === null ? '' : localFilterData.minAge
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLocalFilterData((prev) => ({
                    ...prev,
                    minAge:
                      event.target.value.length > 0
                        ? parseInt(event.target.value)
                        : null,
                  }));
                }}
                InputLabelProps={{
                  shrink: localFilterData.minAge === null ? undefined : true,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} pr={2} pb={2}>
            <FormControl fullWidth>
              <TextField
                type="number"
                id="filter-max-age"
                label={translatePhrase(lang, 'PersonMaxAge')}
                variant="outlined"
                inputProps={{
                  min: 1,
                }}
                value={
                  localFilterData.maxAge === null ? '' : localFilterData.maxAge
                }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLocalFilterData((prev) => ({
                    ...prev,
                    maxAge:
                      event.target.value.length > 0
                        ? parseInt(event.target.value)
                        : null,
                  }));
                }}
                InputLabelProps={{
                  shrink: localFilterData.maxAge === null ? undefined : true,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} pr={2} pb={2}>
            <FormControl fullWidth>
              <InputLabel id="filter-gender-select-label">
                {translatePhrase(lang, 'PersonGender')}
              </InputLabel>
              <Select
                labelId="filter-gender-select-label"
                id="filter-gender-select"
                value={
                  localFilterData.gender === null ? '' : localFilterData.gender
                }
                label="Age"
                onChange={(event: SelectChangeEvent) =>
                  setLocalFilterData((prev) => ({
                    ...prev,
                    gender:
                      event.target.value.length > 0 ? event.target.value : null,
                  }))
                }
              >
                <MenuItem value="male">
                  {translatePhrase(lang, 'PersonMale')}
                </MenuItem>
                <MenuItem value="female">
                  {translatePhrase(lang, 'PersonFemale')}
                </MenuItem>
                <MenuItem value="">-</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} pr={2} pb={2}>
            <FormControl fullWidth>
              <TextField
                id="filter-country"
                label={translatePhrase(lang, 'PersonCountry')}
                variant="outlined"
                value={localFilterData.country}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLocalFilterData((prev) => ({
                    ...prev,
                    country: event.target.value,
                  }))
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} pr={2} pb={2}>
            <FormControl fullWidth>
              <TextField
                id="filter-city"
                label={translatePhrase(lang, 'PersonCity')}
                variant="outlined"
                value={localFilterData.city}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLocalFilterData((prev) => ({
                    ...prev,
                    city: event.target.value,
                  }))
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} pr={2} pb={2}>
            <FormGroup>
              <FormControlLabel
                id="filter-only-interesting"
                control={
                  <Checkbox
                    checked={localFilterData.onlyInteresting}
                    color={'fi' as 'default'}
                    value="1"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setLocalFilterData((prev) => ({
                        ...prev,
                        onlyInteresting: event.target.checked,
                      }))
                    }
                  />
                }
                label={translatePhrase(lang, 'InterestingOnly')}
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Button
            size="large"
            color="primary"
            onClick={handleFilterPeople}
            disabled={filtering}
          >
            <FilterAltIcon /> {translatePhrase(lang, 'Filter')}
          </Button>
          <Button
            size="large"
            color="secondary"
            onClick={handleClearFilter}
            disabled={filtering}
          >
            <Clear /> {translatePhrase(lang, 'ResetFilter')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
