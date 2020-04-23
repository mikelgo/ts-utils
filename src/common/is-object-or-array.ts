import { isObject } from './is-object';

/**
 * Checks if an argument is either an object or an array
 * @param arg - parameter which should be verified
 */
export function isObjectOrArray(arg: any): boolean {
  return isObject(arg) || Array.isArray(arg);
}
