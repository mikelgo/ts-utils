import { DataTypes } from '../@types/data-types';

/**
 * Checks if an argument is an object
 * Note: will return true if input is an array, because arrays are objects in JavaScript
 * @param arg - parameter which should be verified
 */
export function isObject(arg: any): boolean {
  return typeof arg === DataTypes.object;
}
