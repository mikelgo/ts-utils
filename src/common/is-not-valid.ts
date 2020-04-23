import { isValid } from './is-valid';

/**
 * Checks if a value is not a valid value. That means null, undefined, NaN.
 * @param arg - parameter which should be verified
 */
export function isNotValid(arg: any): boolean {
  return !isValid(arg);
}
