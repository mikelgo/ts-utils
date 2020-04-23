/**
 * Checks if an argument is an array
 * @param arg - parameter which should be verified
 */
export function isArray<T>(arg: any): boolean {
  return !!arg && Array.isArray(arg);
}
