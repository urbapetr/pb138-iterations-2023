import { Result } from '@badrap/result';
import prisma from '../client';
import type { UserDeleteData } from './types/data';
import type { UserDeleteResult } from './types/return';

/**
 * @todo Write a query that deletes the user with the `id` specified
 * by the function's parameters, along with their comments and posts.
 * Handle everything within a Prisma transaction. Obtain all "deleted" items
 * that have been "deleted" (`deletedAt` property set) in this transaction.
 *
 * - The necessary data is provided in the data parameter.
 * - Check the result type to see what needs to be the output that is obtained
 *   by the prisma query.
 *
 * Write the absolute minimal number of queries necessary within
 * the transaction
 *
 * Use Prisma's interactive transactions to obtain the user in question and
 * throw an error if the user with id passed via the function's parameter
 * does not exist. Then (in one query) "delete" user's existing comments
 * (the comments that have NOT been deleted yet), user's posts
 * (the posts that have NOT been deleted yet) the user - set fields `deletedAt`
 * (and `editedAt` for posts) for all of mentoned entities
 * to **the same** current date. The result should contain only items that
 * have been affected by this query - previously deleted posts & comments
 * do NOT count.
 *
 * Hint: you can perform nested updates within one update. You can also filter
 * the data you include.
 *
 * Handle the situation when the user has already been deleted before
 * by throwing with a custom message:
 * 'The user has already been deleted!'
 *
 * Specification:
 * 1. order all fields that obtain multiple records by their required date
 *    field in descending order
 *
 * @throws (wrapped by the Result type) when the user with user id provided
 * via the function's parameter does not exist (handled by Prisma), or on
 * any unexpected error
 *
 * @param data - data necessary to delete a user
 * @returns - `Result.ok(User & {
 * posts: Post[],
 * comments: Comment[]
 * })`
 *         - `Result.err(_)` - on all other failures
 *           (`_` meaning the original Prisma error)
 */
const deleteUser = async (data: UserDeleteData): UserDeleteResult => {
  try {
    const deletedAt = new Date();

    return Result.ok(
      await prisma.$transaction(async (transaction) => {
        /* write code here as you usually would, the transaction only
         * encapsulates this operation - all must succeed for the operation to
         * propagate into the database
         *
         * use "transaction" parameter instead of the usual "prisma"
         * Write your code here, remove this comment before you do so. */
        throw new Error('[TODO]: Unimplemented - remove me and write the solution');
      }),
    );
  } catch (e) {
    return Result.err(e as Error);
  }
};

export default deleteUser;
