import { isNotObject, isNotObjectOrArray, isObject, isObjectOrArray, isNotValid, isValid } from '../utils';
import {
  primitiveValuesAsArray,
  primitiveValues,
  objectValues,
  objectValuesAsArray,
  arrayValuesAsArray,
  arrayValues
} from '../test-utils';
describe('[Object utils]', () => {
  it('isNotObject(): should return true if input is not an object', () => {
    expect(isNotObject('string')).toEqual(true);
    expect(isNotObject(42)).toEqual(true);
    expect(isNotObject(undefined)).toEqual(true);
  });

  it('isNotObject(): should return false if input is an object', () => {
    expect(isNotObject({ name: 'John Doe' })).toEqual(false);
  });

  it('isNotObjectOrArray(): should return true if input is not an object', () => {
    expect(isNotObjectOrArray('string')).toEqual(true);
    expect(isNotObjectOrArray(42)).toEqual(true);
    expect(isNotObjectOrArray(undefined)).toEqual(true);
  });

  it('isNotObjectOrArray(): should return false if input is an object', () => {
    expect(isNotObjectOrArray([1, 2])).toEqual(false);
    expect(isNotObjectOrArray({ name: 'John Doe' })).toEqual(false);
  });

  it('isObject(): should return true if input is an object', () => {
    expect(isObject('string')).toEqual(false);
    expect(isObject(42)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
  });

  it('isObject(): should return false if input is not an object', () => {
    expect(isObject({ name: 'John Doe' })).toEqual(true);
  });

  it('isObjectOrArray(): should return false if input is not an object', () => {
    expect(isObjectOrArray('string')).toEqual(false);
    expect(isObjectOrArray(42)).toEqual(false);
    expect(isObjectOrArray(undefined)).toEqual(false);
  });

  it('isObjectOrArray(): should return true if input is an object', () => {
    expect(isObjectOrArray([1, 2])).toEqual(true);
    expect(isObjectOrArray({ name: 'John Doe' })).toEqual(true);
  });

  it('isValid() should return true when the argument is a valid value', () => {
    expect(isValid(primitiveValues.number)).toEqual(true);
    expect(isValid(primitiveValues.string)).toEqual(true);
    expect(isValid(primitiveValues.true)).toEqual(true);
    expect(isValid(primitiveValues.false)).toEqual(true);

    expect(isValid(objectValues.empty)).toEqual(true);
    expect(isValid(objectValues.any)).toEqual(true);

    expect(isValid(arrayValues.empty)).toEqual(true);
    expect(isValid(arrayValues.strings)).toEqual(true);
    expect(isValid(arrayValues.numbers)).toEqual(true);
    expect(isValid(arrayValues.boolean)).toEqual(true);
    expect(isValid(arrayValues.null)).toEqual(true);
    expect(isValid(arrayValues.undefined)).toEqual(true);
  });

  it('isValid() should return false when the argument is not a valid value', () => {
    expect(isValid(primitiveValues.null)).toEqual(false);
    expect(isValid(primitiveValues.unde)).toEqual(false);
  });

  it('isNotValid() should return true when the argument is not a valid value', () => {
    expect(isNotValid(primitiveValues.null)).toEqual(true);
    expect(isNotValid(primitiveValues.unde)).toEqual(true);
  });

  it('isNotValid() should return false when the argument is a valid value', () => {
    expect(isNotValid(primitiveValues.number)).toEqual(false);
    expect(isNotValid(primitiveValues.string)).toEqual(false);
    expect(isNotValid(primitiveValues.true)).toEqual(false);
    expect(isNotValid(primitiveValues.false)).toEqual(false);

    expect(isNotValid(objectValues.empty)).toEqual(false);
    expect(isNotValid(objectValues.any)).toEqual(false);

    expect(isNotValid(arrayValues.empty)).toEqual(false);
    expect(isNotValid(arrayValues.strings)).toEqual(false);
    expect(isNotValid(arrayValues.numbers)).toEqual(false);
    expect(isNotValid(arrayValues.boolean)).toEqual(false);
    expect(isNotValid(arrayValues.null)).toEqual(false);
    expect(isNotValid(arrayValues.undefined)).toEqual(false);
  });
});
