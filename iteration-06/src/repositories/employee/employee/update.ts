import { Result } from '@badrap/result';
import client from '../../client';
import type { EmployeeUpdateData } from '../types/data';
import type { EmployeeUpdateResult } from '../types/return';
import { genericError } from '../../types';
import { checkEmployee } from '../common';

/**
 * Write a repository call that updates the employee data. It is only possible
 * to change the employee's name and surname.
 *
 * Use the `checkEmployee` function from `../common` file to check
 * if the employee exists and was not deleted.
 *
 * @param data object containing the employee id and: either name or surname,
 *             or both
 * @returns - On success: An updated employee record and their timetable
 *            records (ordered by the `from` property in descending order)
 *          - On failure: Either a special error
 *                        (handled by `checkEmployee` function), or a
 *                        generic error
 */
const update = async (data: EmployeeUpdateData): EmployeeUpdateResult => {
  try {
    return await client.$transaction(async (tx) => {
      const employeeCheck = await checkEmployee({ id: data.id }, tx);

      if (employeeCheck.isErr) {
        return Result.err(employeeCheck.error);
      }

      /* Finish the query - update employee information */
      throw new Error('Remove this error and start coding.');
    });
  } catch (e) {
    return genericError;
  }
};

export default update;
