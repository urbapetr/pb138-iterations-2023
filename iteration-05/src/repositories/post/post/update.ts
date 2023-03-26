import { Result } from '@badrap/result';
import prisma from '../../client';
import type { PostUpdateData } from '../types/data';
import type { PostUpdateResult } from '../types/return';

/**
  * @todo Write a query that edits a post if and only if the creator
 * of the post in mind is the user with the `id` that is passed
 * via the function parameter. Edit takes the last state - content of the post,
 * creates a PostEdit record with post's current content and its date of edit
 * (field `editedAt` from post) and updates the post with the new content
 * provided in the `data` parameter.
 *
 * - The necessary data is provided in the data parameter.
 * - Check the result type to see what needs to be the output that is obtained
 *   by the prisma query.
 *
 * Write THREE queries within the transaction (check post,
 * create edit record, update post)
 *
 * Specification for the result:
 * 1. order all fields that obtain multiple records by their
 *    `createdAt` field in descending order
 * 2. include all post edits in the result
 * 3. include the post creator in the result
 *
 * Use Prisma's interactive transactions to obtain the post in question and
 * throw an error if the post is not created by the user (with their id)
 * passed as the parameter, or the post does not exist.
 *
 * Handle the situation where post has been deleted by throwing with a
 * custom message:
 * 'The post has been deleted!'
 *
 * Then, handle the situation where post is not created by the user with id
 * passed in the parameter of the function by throwing with a custom message:
 * 'The user is not the author of this post!'
 *
 *
 * @throws (wrapped by the Result type) when the user with user id provided
 * via the function's parameter is not the post's author, or when the post 7
 * with id provided via the function's parameter does not exist,
 * or on any unexpected error
 *
 * @param data - data necessary for post update
 * @returns - `Result.ok(Post & {
 * creator: User,
 * edits: PostEdit[]
 * })` on success
 *          - `Result.err('The user is not the author of this post!')` when
 *            the user is not the author of the post
 *          - `Result.err(_)` - on all other failures
 *            (`_` meaning the original Prisma error)
 */
const update = async (data: PostUpdateData): PostUpdateResult => {
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

export default update;
