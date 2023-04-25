import { Result } from '@badrap/result';
import client from '../../client';
import { genericError } from '../../types';
import type { EmployeeCreateData } from '../types/data';
import type { EmployeeCreateResult } from '../types/return';
import prisma from '../../__mocks__/client';

/**
 * Create a repository call that creates an employee.
 *
 * @param data object containing necessary data to create a new employee record
 * @returns - On success: the created employee record
 *          - On failure: a generic error
 */
const create = async (data: EmployeeCreateData): EmployeeCreateResult => {
  try {
    const employee = await prisma.employee.create({ data });

    const result = await client.post('/employees', data);

    

    return employee;
  } catch (e) {
    return genericError;
  }
};

export default create;
