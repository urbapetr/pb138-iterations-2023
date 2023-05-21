import { ExpandMore } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

import {
  Button,
  Menu,
  MenuItem,
  Tooltip,
  AppBar,
  Container,
  IconButton,
  Link,
  Typography,
  Toolbar,
  Box,
} from '@mui/material';

import React from 'react';

import { Language, Translation } from '../../data/localization/translation';
import { translatePhrase } from '../../func/utils';

import PeopleInterested from '../PeopleInterested';
import { useRecoilState } from 'recoil';
import { languageAtom } from '../../state/atoms';

export default function Header() {
  const [lang, setLang] = useRecoilState(languageAtom);

  const [selectLanguageAnchorEl, setSelectLanguageAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const selectLanguageHandleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectLanguageAnchorEl(event.currentTarget);
  };

  const onSelectedLanguage = (lang: Language) => {
    setLang(lang);

    setSelectLanguageAnchorEl(null);
  };

  const githubTemplateRepo = translatePhrase(lang, 'GithubTemplateRepo');

  return (
    <AppBar position="static" color={'fi' as 'default'}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="span">
            {translatePhrase(lang, 'Brand')}
          </Typography>
          <PeopleInterested />
          <Box display="inline-block">
            <Tooltip title={translatePhrase(lang, 'SelectLanguage')}>
              <Button
                id="select-language-button"
                aria-controls={
                  selectLanguageAnchorEl === null
                    ? undefined
                    : 'select-language-menu'
                }
                aria-haspopup="true"
                aria-expanded={
                  selectLanguageAnchorEl === null ? undefined : 'true'
                }
                onClick={selectLanguageHandleClick}
                color="inherit"
              >
                {lang}
                <ExpandMore />
              </Button>
            </Tooltip>

            <Menu
              id="select-language-menu"
              anchorEl={selectLanguageAnchorEl}
              open={selectLanguageAnchorEl !== null}
              onClose={() => setSelectLanguageAnchorEl(null)}
              MenuListProps={{
                'aria-labelledby': 'select-language-button',
              }}
            >
              {Object.keys(Translation).map((l) => {
                return (
                  <MenuItem
                    key={l}
                    onClick={() => onSelectedLanguage(l as Language)}
                  >
                    {l}
                  </MenuItem>
                );
              })}
            </Menu>
            <Tooltip title={githubTemplateRepo}>
              <Link
                aria-label={githubTemplateRepo}
                color="inherit"
                component={IconButton}
                href="https://github.com/remarkablemark/react-typescript-mui-parcel-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
