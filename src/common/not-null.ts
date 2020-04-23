import { noNullValues } from './no-null-values';
import { isValid } from './is-valid';

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

/**
 * Only internal
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

function getNested(input: any, ...args: string[]): any {
  return args.reduce((obj, level) => obj && obj[level], input);
}
