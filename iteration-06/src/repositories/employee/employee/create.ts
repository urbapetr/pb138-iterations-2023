import { Result } from '@badrap/result';
import client from '../../client';
import { genericError } from '../../types';
import type { EmployeeCreateData } from '../types/data';
import type { EmployeeCreateResult } from '../types/return';

/**
 * Create a repository call that creates an employee.
 *
 * @param data object containing necessary data to create a new employee record
 * @returns - On success: the created employee record
 *          - On failure: a generic error
 */
const create = async (data: EmployeeCreateData): EmployeeCreateResult => {
  try {
    /* Finish the query - create the employee */
    throw new Error('Remove this error and start coding.');
  } catch (e) {
    return genericError;
  }
};

export default create;
