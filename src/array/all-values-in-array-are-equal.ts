import { isNotArray } from './is-not-array';

/**
 * Checks if all values in an array are equal
 * @param arg - array which should be checked
 */
export function allValuesInArrayAreEqual(arg: any[]): boolean {
  if (isNotArray(arg)) {
    throw new Error('Arg is not an array');
  } else {
    return arg.every((value, index, array) => value === array[0]);
  }
}
