import { DataTypes } from '../@types/data-types';
import { isArray, isNotArray, isNotEmptyArray } from '../array/array-utils';

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

/**
 * Checks if an arg[key]'s is null or not
 * @param arg
 * @param props
 */
 function noNullValuesProps(arg: any, props: string[]): boolean {
  if (isValid(props) && props?.length > 0) {
    const results: boolean[] = [];
    const vals: any[] = [];

    props.forEach((prop) => {
      if (arg[prop] === undefined) {
        results.push(true);
      } else {
        results.push(isValid(getNested(arg[prop])));
        vals.push(getNested(arg[prop]));
      }
    });
    if (results.includes(false)) {
      return false;
    }
  }

  return !!arg;
}
/**
 * Checks if an argument is null or if an object contains any
 * null values.
 *
 * Takes as optional argument an array of object keys. If keys are given
 * then only the arg[key]'s are checked for null values.
 * @param arg
 * @param keys
 */
export function notNull(arg: any, keys?: string[]): boolean {
  if (keys) {
    return noNullValuesProps(arg, keys);
  } else {
    return noNullValues(arg);
  }
}
function getNested(input: any, ...args: string[]): any {
  return args.reduce((obj, level) => obj && obj[level], input);
}
