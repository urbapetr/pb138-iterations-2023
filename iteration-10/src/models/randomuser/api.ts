export interface RandomUserApiResultDob {
  age: number;
  date: string;
}

export interface RandomUserApiResultLocation {
  city: string;
  country: string;
  state: string;
}

export interface RandomUserApiResultLogin {
  password: string;
  username: string;
  uuid: string;
}

export interface RandomUserApiResultName {
  first: string;
  last: string;
  title: string;
}

export interface RandomUserApiResultPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

/**
 * Represents type of a results item (person) from
 * https://randomuser.me/ API.
 * Data of the specific person can be accessed here.
 */
export interface RandomUserApiResult {
  name: RandomUserApiResultName;
  phone: string;
  email: string;
  gender: string;
  picture: RandomUserApiResultPicture;
  login: RandomUserApiResultLogin;
  dob: RandomUserApiResultDob;
  location: RandomUserApiResultLocation;
}

/**
 * Represents type of the data fetched from
 * https://randomuser.me/ API.
 */
export interface RandomUserApiResponse {
  results: Array<RandomUserApiResult>;
}
