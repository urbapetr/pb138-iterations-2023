import { Result } from '@badrap/result';
import prisma from '../client';
import type { UserReadAllParameters, UserReadSpecificData } from './types/data';
import type { UserReadAllResult, UserReadSpecificResult } from './types/return';

/**
 * @todo Write a query that will return specific information about
 * a certain user.
 *
 * Write only ONE Prisma query
 *
 * Specification for the result:
 * 1. order all fields that obtain multiple records by their required date
 * field in descending order
 *
 * Handle the situation where user has already been deleted by
 * throwing with a custom message:
 * 'The user has been deleted!'
 *
 * @throws (wrapped by the Result type) when the user with user id provided
 * via the function's parameter has been deleted
 *
 * @param data
 * @returns - `Result.ok({
 * userName: string,
 * email: string,
 * avatar: string,
 * createdAt: Date,
 * deletedAt: Date | null,
 * posts: Post[]
 * })` on success
 *         - `Result.err(Error('The user has been deleted!'))` if the user
 *           has already been deleted
 *         - `Result.err(_)` - on all other failures
 *           (`_` meaning the original Prisma error)
 */
const readSpecific = async (
  data: UserReadSpecificData,
): UserReadSpecificResult => {
  try {
    // Write the code here, remove this comment before you do so.
    throw new Error('[TODO]: Unimplemented - remove me and write the solution');
  } catch (e) {
    return Result.err(e as Error);
  }
};

/**
 * @todo Write a query that finds multiple users
 * (further specified by the parameters of this function)
 *
 * Write only ONE Prisma query
 *
 * Parametes can change whether we look for specific users only, or all posts,
 * as well as ordering of the users by their date of creation
 * (by default descending)
 *
 * Specification for the result:
 * 1. only retrieve the users which have not been deleted yet
 * 2. only retrieve non-sensitive information
 * 3. order users by their time of creation (and if the time equals,
 *    order them by their username alphabetically)
 *
 * @throws (wrapped by the Result type) on any unexpected error
 * (automatically handled by Prisma)
 *
 * @param parameters - optional parameters changing the query
 * @returns - `Result.ok({
 * userName: string,
 * email: string,
 * avatar: string
 * })` on success
 *          - `Result.err(_)` - on all other failures
 *            (`_` meaning the original Prisma error)
 */
const readAll = async (
  parameters?: UserReadAllParameters,
): UserReadAllResult => {
  try {
    // Write the code here, remove this comment before you do so.
  } catch (e) {
    return Result.err(e as Error);
  }
};

const read = {
  all: readAll,
  specific: readSpecific,
};

export default read;
