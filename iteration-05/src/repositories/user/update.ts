import { Result } from '@badrap/result';
import prisma from '../client';
import type { UserUpdateData } from './types/data';
import type { UserUpdateResult } from './types/return';

/**
 * @todo write a query that updates the user's email / username / both
 *
 * - The necessary data is provided in the data parameter.
 * - Check the result type to see what needs to be the output that is obtained
 *   by the prisma query.
 *
 * Use Prisma's interactive transaction to obtain the user in question,
 * check whether the user has been deleted and if not, run the user update.
 *
 * Write TWO Prisma queries within a transaction
 *
 * Handle the situation when the user has already been deleted by throwing
 * with a custom message:
 * 'The user has already been deleted!'
 *
 * @throws (wrapped by the Result type) if the specified user does not exist
 *
 * @param data - data necessary to update the user's credentials
 * @returns - `Result.ok(User)` on success
 *          - `Result.err(Error('The user has already been deleted!'))`
 *            when the user we want to update has already been deleted.
 *          - `Result.err(_)` - on all other failures
 *            (`_` meaning the original Prisma error)
 */
const update = async (data: UserUpdateData): UserUpdateResult => {
  try {
    return Result.ok(
      await prisma.$transaction(async (transaction) => {
        const updateData: Record<string, any> = {};

        if ('email' in data) {
          updateData['email'] = data.email;
        }

        if ('userName' in data) {
          updateData['userName'] = data.userName;
        }

        const user = await transaction.user.findUnique({
          where: {
            id: data.id,
          },
        });

        if (!user) {
          throw new Error('No User found');
        }

        if (user.deletedAt != null) {
          throw new Error('The user has already been deleted!');
        }

        return transaction.user.update({
          where: {
            id: data.id,
          },
          data: updateData,
        });
      }),
    );
  } catch (e) {
    return Result.err(e as Error);
  }
};

export default update;
