import { DataTypes } from './data-types';
import { isArray } from './array-utils';

/**
 * Checks if an argument is not an object
 * Note: will return false if input is an array, because arrays are objects in JavaScript
 * @param arg - parameter which should be verified
 */
export function isNotObject(arg: any): boolean {
  return typeof arg !== DataTypes.object;
}

/**
 * Checks if an argument is neither an object nor an array
 * @param arg - parameter which should be verified
 */
export function isNotObjectOrArray(arg: any): boolean {
  return !(isObject(arg) || Array.isArray(arg));
}

/**
 * Checks if an argument is an object
 * Note: will return true if input is an array, because arrays are objects in JavaScript
 * @param arg - parameter which should be verified
 */
export function isObject(arg: any): boolean {
  return typeof arg === DataTypes.object;
}

/**
 * Checks if an argument is either an object or an array
 * @param arg - parameter which should be verified
 */
export function isObjectOrArray(arg: any): boolean {
  return isObject(arg) || Array.isArray(arg);
}

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
/**
 * Checks if a value is not a valid value. That means null, undefined, NaN.
 * @param arg - parameter which should be verified
 */
export function isNotValid(arg: any): boolean {
  return !isValid(arg);
}
