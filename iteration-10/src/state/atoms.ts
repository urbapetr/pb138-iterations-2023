import { Language } from '../data/localization/translation';
import {
  defaultFilterData,
  PeopleFilterData,
  PeoplePreferences,
} from './../models/people';
import { RandomUserApiResult } from './../models/randomuser/api';
import { atom } from 'recoil';
import axios from 'axios';

// People atom
export const peopleAtom = atom<RandomUserApiResult[]>({
  key: 'peopleAtom',
  default: [],
  effects_UNSTABLE: [
    ({ setSelf }) => {
      axios
        .get<RandomUserApiResult[]>('https://randomuser.me/api/?results=50')
        .then((response) => {
          setSelf(response.data);
        })
        .catch((error) => {
          console.error('Error fetching people data:', error);
        });
    },
  ],
});

// People filter data atom
export const peopleFilterDataAtom = atom<PeopleFilterData>({
  key: 'peopleFilterDataAtom',
  default: defaultFilterData,
});

// People preferences atom
export const peoplePreferencesAtom = atom<PeoplePreferences>({
  key: 'peoplePreferencesAtom',
  default: {
    interested: new Set<string>(),
    notInterested: new Set<string>(),
  },
});

// Language atom
export const languageAtom = atom<Language>({
  key: 'languageAtom',
  default: 'En',
});
