/**
 * Checks if an argument is an array
 * @param arg - parameter which should be verified
 */
export function isArray<T>(arg: any): boolean {
  return !!arg && Array.isArray(arg);
}

/**
 * Checks if an argument is not an array
 * @param arg - parameter which should be verified
 */
export function isNotArray<T>(arg: any): boolean {
  return !isArray(arg);
}

/**
 * Checks if an array is empty
 * @param arg - array which should be checked
 */
export function isEmptyArray<T>(arg: T[]): boolean {
  if (isNotArray(arg)) {
    throw new Error('Argument is not an array.');
  }
  return isArray(arg) && arg.length === 0;
}

/**
 * Checks if an array is not empty
 * @param arg - array which should be checked
 */
export function isNotEmptyArray<T>(arg: T[]): boolean {
  if (isNotArray(arg)) {
    throw new Error('Argument is not an array.');
  }
  return isArray(arg) && arg.length > 0;
}

/**
 * Checks if all values in an array are equal
 * @param arg
 */
export function allValuesInArrayAreEqual(arg: any[]): boolean {
  if (isNotArray(arg)) {
    throw new Error('Arg is not an array');
  } else {
    return arg.every((value, index, array) => value === array[0]);
  }
}

/**
 * Checks if all values in an array are not equal
 * @param arg
 */
export function allValuesInArrayAreNotEqual(arg: any[]): boolean {
  if (isNotArray(arg)) {
    throw new Error('Arg is not an array');
  } else {
    return !allValuesInArrayAreEqual(arg);
  }
}
