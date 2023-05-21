import { selector } from 'recoil';
import {
  peopleAtom,
  peopleFilterDataAtom,
  peoplePreferencesAtom,
} from './atoms';
import { RandomUserApiResult } from '../models/randomuser/api';

// People to be shown selector
export const peopleToShowSelector = selector<RandomUserApiResult[]>({
  key: 'peopleToShowSelector',
  get: ({ get }) => {
    const people = Array.isArray(get(peopleAtom)) ? get(peopleAtom) : [];
    const filterData = get(peopleFilterDataAtom);
    const preferences = get(peoplePreferencesAtom);
    const filteredPeople = people.filter((person) => {
      const isGenderMatched =
        filterData.gender === null || person.gender === filterData.gender;
      const isAgeMatched =
        (filterData.minAge === null || person.dob.age >= filterData.minAge) &&
        (filterData.maxAge === null || person.dob.age <= filterData.maxAge);
      const isCityMatched =
        filterData.city === '' ||
        person.location.city.includes(filterData.city);
      const isCountryMatched =
        filterData.country === '' ||
        person.location.country.includes(filterData.country);
      const isOnlyInterestingMatched =
        !filterData.onlyInteresting ||
        preferences.interested.has(person.login.uuid);

      return (
        isGenderMatched &&
        isAgeMatched &&
        isCityMatched &&
        isCountryMatched &&
        isOnlyInterestingMatched
      );
    });

    return filteredPeople;
  },
});

// Interesting people selector
export const interestingPeopleSelector = selector<Set<string>>({
  key: 'interestingPeopleSelector',
  get: ({ get }) => {
    const preferences = get(peoplePreferencesAtom);

    return preferences.interested;
  },
});

export default {};
