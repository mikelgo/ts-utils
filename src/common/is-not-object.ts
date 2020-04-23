import { isObject } from './is-object';
import { DataTypes } from '../@types/data-types';

/**
 * Checks if an argument is not an object
 * Note: will return false if input is an array, because arrays are objects in JavaScript
 * @param arg - parameter which should be verified
 */
export function isNotObject(arg: any): boolean {
  return typeof arg !== DataTypes.object;
}
