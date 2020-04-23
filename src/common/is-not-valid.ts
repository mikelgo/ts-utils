import { isValid } from './is-valid';
import { notNull } from './not-null';

/**
 * Checks if a value is not a valid value. That means null, undefined, NaN.
 * @param arg - parameter which should be verified
 * @param deep - optional parameter which specify if a deep null check should be done.
 * A deep null check means any Object property will be traversed and checked for a
 * valid value.
 */
export function isNotValid(arg: any, deep?: boolean): boolean {
  if (deep) {
    return !notNull(arg);
  }
  return !isValid(arg);
}
