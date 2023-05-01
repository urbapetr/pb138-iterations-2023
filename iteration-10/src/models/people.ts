export interface PeopleFilterData {
  /**
   * People with specific gender to be included.
   * If null, there is no such restriction.
   */

  gender: string | null;
  /**
   * Min. age people must have to be included.
   * If null, there is no such restriction.
   */

  minAge: number | null;
  /**
   * Max. age people must have to be included.
   * If null, there is no such restriction.
   */

  maxAge: number | null;
  /**
   * City in which people must be located to be included.
   * Any substring of the person's city is considered as well.
   * If empty, there is no such restriction.
   */

  city: string;
  /**
   * Country in which people must be located to be included.
   * Any substring of the person's country is considered as well.
   * If empty, there is no such restriction.
   */

  country: string;

  /**
   * Person has to be marked 'interesting' to be included.
   * If false, there is no such restriction.
   */

  onlyInteresting: boolean;
}

export interface PeoplePreferences {
  /**
   * Set of people uuids where the user clicked 'Interested'.
   * Such people can be easily accessed from App bar.
   */

  interested: Set<string>;
  /**
   * Set of people uuids where the user clicked 'Not Interested'.
   * Such people cannot be shown anymore.
   */

  notInterested: Set<string>;
}

export const defaultFilterData: PeopleFilterData = {
  gender: null,
  minAge: null,
  maxAge: null,
  city: '',
  country: '',
  onlyInteresting: false,
};
