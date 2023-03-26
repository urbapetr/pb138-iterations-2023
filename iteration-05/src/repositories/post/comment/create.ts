import { Result } from '@badrap/result';
import prisma from '../../client';
import type { CommentCreateData } from '../types/data';
import type { CommentCreateResult } from '../types/return';

/**
 * @todo Write a query that creates a comment by a user and a post with
 * id's specified in the function's parameters
 *
 * - The necessary data is provided in the data parameter.
 * - Check the result type to see what needs to be the output that is obtained
 *   by the Prisma query.
 *
 * Use Prisma's interactive transaction to obtain the user and post
 * in question, check whether they have been deleted and then
 * run the comment creation.
 *
 * Write THREE Prisma queries and other logic checks within
 * the Prisma transaction
 *
 * Handle situation where the user we want to comment as has been deleted
 * by throwing with a custom message:
 * 'The user has been deleted!'
 *
 * Handle situation where the post we want to comment on has been deleted
 * by throwing with a custom message:
 * 'The post has been deleted!'
 *
 * @throws (wrapped in the Result type) when the post or user with
 * specified id's don't exist (handled by Prisma), when the user or post has
 * been deleted or any other unexpected error occurs
 *
 * @param data - data necessary for comment creation
 * @returns - `Result.ok(Comment & {
 * post: PostAnonymized,
 * commenter: User
 * })` on success
 *         - `Result.err(Error('The user has been deleted!'))` when the user
 *           we want to comment as has already been deleted
 *         - `Result.err(Error('The post has been deleted!'))` when the post
 *           we want to comment on has already been deleted
 *         - `Result.err(_)` - on all other failures
 *           (`_` meaning the original Prisma error)
 */
const create = async (data: CommentCreateData): CommentCreateResult => {
  try {
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

export default create;
