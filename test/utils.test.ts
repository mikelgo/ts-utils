import { isValid } from '../src/common/is-valid';
import { isNotValid } from '../src/common/is-not-valid';
import { isObject } from '../src/common/is-object';
import { isNotObject } from '../src/common/is-not-object';
import { isObjectOrArray } from '../src/common/is-object-or-array';
import { isNotObjectOrArray } from '../src/common/is-not-object-or-array';
import { noNullValues } from '../src/common/no-null-values';
import { notNull } from '../src/common/not-null';

describe('isNotObject()', () => {
  it('should return true if input is not an object', () => {
    expect(isNotObject('string')).toEqual(true);
    expect(isNotObject(42)).toEqual(true);
    expect(isNotObject(undefined)).toEqual(true);
  });

  it('should return false if input is an object', () => {
    expect(isNotObject({ name: 'John Doe' })).toEqual(false);
  });
});

describe('isNotObjectOrArray()', () => {
  it('should return true if input is not an object', () => {
    expect(isNotObjectOrArray('string')).toEqual(true);
    expect(isNotObjectOrArray(42)).toEqual(true);
    expect(isNotObjectOrArray(undefined)).toEqual(true);
  });

  it('should return false if input is an object', () => {
    expect(isNotObjectOrArray([1, 2])).toEqual(false);
    expect(isNotObjectOrArray({ name: 'John Doe' })).toEqual(false);
  });
});

describe('isObject()', () => {
  it('should return true if input is an object', () => {
    expect(isObject('string')).toEqual(false);
    expect(isObject(42)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
  });

  it('should return false if input is not an object', () => {
    expect(isObject({ name: 'John Doe' })).toEqual(true);
  });
});

describe('isObjectOrArray()', () => {
  it('should return false if input is not an object', () => {
    expect(isObjectOrArray('string')).toEqual(false);
    expect(isObjectOrArray(42)).toEqual(false);
    expect(isObjectOrArray(undefined)).toEqual(false);
  });

  it('should return true if input is an object', () => {
    expect(isObjectOrArray([1, 2])).toEqual(true);
    expect(isObjectOrArray({ name: 'John Doe' })).toEqual(true);
  });
});

describe('isValid()', () => {
  it('should return true when the argument is a valid value', () => {
    expect(isValid(42)).toEqual(true);
    expect(isValid('string')).toEqual(true);
    expect(isValid(true)).toEqual(true);
    expect(isValid(false)).toEqual(true);

    expect(isValid({})).toEqual(true);
    expect(isValid({ name: 'something' })).toEqual(true);

    expect(isValid([])).toEqual(true);
    expect(isValid(['string'])).toEqual(true);
    expect(isValid([42])).toEqual(true);
    expect(isValid([true, false])).toEqual(true);
    expect(isValid([null])).toEqual(true);
    expect(isValid([undefined])).toEqual(true);
  });

  it('should return false when the argument is not a valid value', () => {
    expect(isValid(null)).toEqual(false);
    expect(isValid(undefined)).toEqual(false);
  });
});

describe('isNotValid()', () => {
  it('should return true when the argument is not a valid value', () => {
    expect(isNotValid(null)).toEqual(true);
    expect(isNotValid(undefined)).toEqual(true);
  });

  it('should return false when the argument is a valid value', () => {
    expect(isNotValid(42)).toEqual(false);
    expect(isNotValid('strng')).toEqual(false);
    expect(isNotValid(true)).toEqual(false);
    expect(isNotValid(false)).toEqual(false);

    expect(isNotValid({})).toEqual(false);
    expect(isNotValid({ name: 'john' })).toEqual(false);

    expect(isNotValid([])).toEqual(false);
    expect(isNotValid(['string'])).toEqual(false);
    expect(isNotValid([42])).toEqual(false);
    expect(isNotValid([true, false])).toEqual(false);
    expect(isNotValid([null])).toEqual(false);
    expect(isNotValid([undefined])).toEqual(false);
  });
});

describe('noNullValues', () => {
  it('should return expected result', () => {
    expect(noNullValues(null)).toEqual(false);

    expect(noNullValues({})).toEqual(true);

    expect(noNullValues({ id: 100, name: 'ted' })).toEqual(true);

    expect(noNullValues({ id: null, name: 1 })).toEqual(false);

    expect(noNullValues({ id: 100, name: 'ted', address: { id: null, name: 'a' } })).toEqual(false);

    expect(noNullValues({ id: 100, name: 'ted', address: { id: [], name: 'a' } })).toEqual(true);

    expect(noNullValues({ id: 100, name: [] })).toEqual(true);
  });
});

describe('notNull', () => {
  it('with props: should return expected result', () => {
    expect(notNull({ id: 100, name: null }, ['id', 'name'])).toEqual(false);

    expect(notNull({ id: 100, name: null }, ['id', 'foo'])).toEqual(true);

    expect(notNull({ id: 100, name: [] }, ['id', 'foo'])).toEqual(true);
    expect(notNull({ id: 100, name: [] }, ['id', 'name'])).toEqual(true);
  });

  it('without props: should return expected result', () => {
    expect(notNull(null)).toEqual(false);

    expect(notNull({})).toEqual(true);

    expect(notNull({ id: 100, name: 'ted' })).toEqual(true);

    expect(notNull({ id: null, name: 1 })).toEqual(false);

    expect(notNull({ id: 100, name: 'ted', address: { id: null, name: 'a' } })).toEqual(false);

    expect(notNull({ id: 100, name: 'ted', address: { id: [], name: 'a' } })).toEqual(true);

    expect(notNull({ id: 100, name: [] })).toEqual(true);
  });
});
