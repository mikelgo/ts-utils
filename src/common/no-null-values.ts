import { isValid } from './is-valid';
import { DataTypes } from '../@types/data-types';
import { isArray } from '../array-utils';
import { isNotValid } from './is-not-valid';

/**
 * Checks if an argument is null or if an object contains any
 * null values.
 * @param arg
 */
export function noNullValues(arg: any): boolean {
  if (typeof arg === DataTypes.object) {
    /**
     * if arg is an object, first check if it's null
     */
    if (isNotValid(arg)) {
      return false;
    }
    /**
     * if arg is an object but not null, check if it is an array.
     * Then some special handling is needed.
     */
    if (isValid(arg) && isArray(arg)) {
      // TODO evtl. also for all array values check if it has nulls
      return true;
    }
    /**
     * Get all object keys and check each value for every key.
     * If at least on value is null, this method will return false.
     */
    const keys: string[] = Object.keys(arg);
    const results: boolean[] = [];
    keys.forEach((key) => {
      // let value = arg[key];
      if (typeof arg[key] === DataTypes.object) {
        // results.push(noNullValues(value));
        results.push(noNullValues(arg[key]));
      } else {
        results.push(isValid(arg[key]));
      }
    });
    if (results.includes(false)) {
      return false;
    }
  }
  /**
   * default
   */

  return !!arg;
}
