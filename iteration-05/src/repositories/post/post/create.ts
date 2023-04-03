import { Result } from '@badrap/result';
import prisma from '../../client';
import type { PostCreateData } from '../types/data';
import type { PostCreateResult } from '../types/return';

/**
 * @todo Write a query for creating a post.
 *
 * Write only ONE Prisma query.
 * 
 * **Optional** change of the assignment -
 * Write an interactive transaction which checks if the User has already
 * been deleted or not. Throw a custom error of your choice.
 *
 * - The necessary data is provided in the data parameter.
 * - Check the result type to see what needs to be the output that is obtained
 *   by the Prisma query.
 *
 * @throws (wrapped in the Result type) on any unexpected error -
 * f.e. User does not exist, cannot connect to the DB
 * (automatically handled by Prisma), etc.
 *
 * @param data - data necessary for post creation
 * @returns - `Result.ok(Post & { creator: User })` on success
 *          - `Result.err(_)` - on all other failures
 *            (`_` meaning the original Prisma error)
 */
const create = async (data: PostCreateData): PostCreateResult => {
  try {
    // Write the code here, remove this comment before you do so.
    throw new Error('[TODO]: Unimplemented - remove me and write the solution');
  } catch (e) {
    return Result.err(e as Error);
  }
};

export default create;
