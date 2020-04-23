import { DataTypes } from '../@types/data-types';
import { isArray } from '../array-utils';

/**
 * Checks if a value is a valid value. That means not null, undefined, NaN.
 * @param arg - parameter which should be verified
 */
export function isValid(arg: any): boolean {
  /**
   * regardless the actual value of any incoming boolean it just matters if it
   * is a valid value. That means a 'false' is a valid value because it is a valid boolean, so this function will
   * return 'true'.
   */
  if (typeof arg === DataTypes.boolean) {
    return true;
  }
  /**
   * if the argument is an array the actual values will not be checked because without having any context
   * information it is not possible to say if e.g. a null value in the array is a valid value or not.
   */
  if (isArray(arg)) {
    return true;
  }
  return !!arg;
}
