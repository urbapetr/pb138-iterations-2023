import { Language, Translation } from '../data/localization/translation';
import { Phrase } from './../data/localization/phrase';
import { RandomUserApiResult } from './../models/randomuser/api';

/**
 * Gets full name of the person.
 * @param person - Source person.
 */
export const getFullName = (person: RandomUserApiResult) =>
  `${person.name.first} ${person.name.last}`;

/**
 * Puts data into the string with defined parts (\{\\d+\}).
 * Modified based on https://stackoverflow.com/a/18405800.
 * @param str - Source string.
 * @param args - Data to be put into the string.
 */
export const format = (str: string, ...args: (string | number | boolean)[]) => {
  return str.replace(/{(\d+)}/g, (match, inx) => {
    return typeof args[inx] !== 'undefined' ? `${args[inx]}` : match;
  });
};

/**
 * Translates given phrase into the specific language.
 * @param lang - Target language.
 * @param phrase - Phrase to translate.
 * @param phraseArgs - Additional data to be formatted
 * in the phrase with \{0\}, \{1\}, ...
 * @returns Translated phrase, 'Unknown language' in case
 * of unknown language or 'Unknown phrase' in case of
 * unknown phrase.
 */
export const translatePhrase = (
  lang: Language,
  phrase: Phrase,
  ...phraseArgs: (string | number | boolean)[]
) => {
  if (!(lang in Translation)) {
    return 'Unknown language';
  }

  if (!(phrase in Translation[lang])) {
    return 'Unknown phrase';
  }

  if (phraseArgs.length > 0) {
    return format(Translation[lang][phrase], ...phraseArgs);
  }

  return Translation[lang][phrase];
};

/**
 * Gets URL address of the place on Google Maps based on the
 * search query.
 */
export const getGoogleMapsLink = (searchQuery: string) =>
  `https://google.com/maps/search/${searchQuery}`;
