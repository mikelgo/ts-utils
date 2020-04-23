import { isObject } from './is-object';

/**
 * Checks if an argument is neither an object nor an array
 * @param arg - parameter which should be verified
 */
export function isNotObjectOrArray(arg: any): boolean {
  return !(isObject(arg) || Array.isArray(arg));
}
