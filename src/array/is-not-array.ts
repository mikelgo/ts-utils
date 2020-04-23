import { isArray } from './is-array';

/**
 * Checks if an argument is not an array
 * @param arg - parameter which should be verified
 */
export function isNotArray<T>(arg: any): boolean {
  return !isArray(arg);
}
