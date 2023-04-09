import { Result } from '@badrap/result';
import prisma from '../client';
import type { UserRegisterData } from './types/data';
import type { UserRegisterResult } from './types/return';

/**
 * @todo Write a query that registers/creates a user.
 * In the real world, you would have some security module handling
 * password hashing, together with salt creation and usage.
 * This is not a tutorial on how to do that, just a repository
 *
 * Write only ONE Prisma query
 *
 * @throws (wrapped by the Result type) if the user we want to create already
 * is within the system (either has the same username, or email - handled
 * by Prisma and SQL constraints),
 * or on any unexpected error
 *
 * @param data - data necessary for user registration/creation
 * @returns - `Result.ok(User)` on success
 *          - `Result.err(_)` - on all other failures
 *            (`_` meaning the original Prisma error)
 */
const register = async (data: UserRegisterData): UserRegisterResult => {
  try {
    // Write the code here, remove this comment before you do so.
    throw new Error('[TODO]: Unimplemented - remove me and write the solution');
  } catch (e) {
    return Result.err(e as Error);
  }
};

export default register;
