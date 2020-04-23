import { isNotArray } from './is-not-array';
import { allValuesInArrayAreEqual } from './all-values-in-array-are-equal';

/**
 * Checks if all values in an array are not equal
 * @param arg - array which should be checked
 */
export function allValuesInArrayAreNotEqual(arg: any[]): boolean {
  if (isNotArray(arg)) {
    throw new Error('Arg is not an array');
  } else {
    return !allValuesInArrayAreEqual(arg);
  }
}
