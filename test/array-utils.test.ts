import { isArray } from '../src/array/is-array';
import { isNotArray } from '../src/array/is-not-array';
import { isEmptyArray } from '../src/array/is-empty-array';
import { isNotEmptyArray } from '../src/array/is-not-empty-array';
import { allValuesInArrayAreEqual } from '../src/array/all-values-in-array-are-equal';
import { allValuesInArrayAreNotEqual } from '../src/array/all-values-in-array-are-not-equal';

describe('isArray()', () => {
  it('should return true if the input is an array', () => {
    expect(isArray([])).toEqual(true);
    expect(isArray(['string'])).toEqual(true);
  });

  it('should return false if the input is not an array', () => {
    expect(isArray(null)).toEqual(false);
    expect(isArray(undefined)).toEqual(false);
    expect(isArray(42)).toEqual(false);
    expect(isArray('string')).toEqual(false);
    expect(isArray(true)).toEqual(false);
  });
});

describe('isNotArray()', () => {
  it('should return true if the input is not an array', () => {
    expect(isNotArray(null)).toEqual(true);
    expect(isNotArray(undefined)).toEqual(true);
    expect(isNotArray(42)).toEqual(true);
    expect(isNotArray('str')).toEqual(true);
    expect(isNotArray(true)).toEqual(true);
  });

  it('should return false if the input is an array', () => {
    expect(isNotArray([])).toEqual(false);
    expect(isNotArray(['string'])).toEqual(false);
  });
});

describe('isEmptyArray()', () => {
  it('should return true if the incoming array is empty', () => {
    expect(isEmptyArray([])).toEqual(true);
  });

  it('should return false if the incoming array is not empty', () => {
    expect(isEmptyArray(['s'])).toEqual(false);
  });

  it('should throw an error when argument is not an array', () => {
    // https://stackoverflow.com/a/4144803/9620995
    expect(() => {
      //@ts-ignore
      isEmptyArray(42);
    }).toThrow(new Error('Argument is not an array.'));
    expect(() => {
      //@ts-ignore
      isEmptyArray(null);
    }).toThrow(new Error('Argument is not an array.'));
  });
});

describe('isNotEmptyArray()', () => {
  it('should return true when the incoming array is not empty', () => {
    expect(isNotEmptyArray(['s'])).toEqual(true);
  });

  it('should return false when the incoming array is empty or is no array', () => {
    expect(isNotEmptyArray([])).toEqual(false);
  });

  it('should throw an error when argument is not an array', () => {
    expect(() => {
      //@ts-ignore
      isNotEmptyArray(null);
    }).toThrow(new Error('Argument is not an array.'));
  });
});

describe('allValuesInArrayAreEqual()', () => {
  it('should return true if all arguments are the same', () => {
    expect(allValuesInArrayAreEqual([1, 1, 1])).toEqual(true);
    expect(allValuesInArrayAreEqual(['a', 'a'])).toEqual(true);
  });

  it('should return false if all arguments are not equal', () => {
    expect(allValuesInArrayAreEqual([1, 1, 2])).toEqual(false);
    expect(allValuesInArrayAreEqual(['a', 'b'])).toEqual(false);
  });

  it('should throw an error when argument is not an array', () => {
    expect(() => {
      //@ts-ignore
      allValuesInArrayAreEqual(null);
    }).toThrow(new Error('Arg is not an array'));

    expect(() => {
      /**
       * I do also want to test the case if someone really ignores every compile time hint and passes something
       * not 'array-like' as parameter, because of that i neet to ts-ignore
       */
      // @ts-ignore
      allValuesInArrayAreEqual('string');
    }).toThrow(new Error('Arg is not an array'));
  });
});

describe('allValuesInArrayAreNotEqual()', () => {
  it('should return false if all arguments are the same', () => {
    expect(allValuesInArrayAreNotEqual([1, 1, 1])).toEqual(false);
    expect(allValuesInArrayAreNotEqual(['a', 'a'])).toEqual(false);
  });

  it('should return true if all arguments are not equal', () => {
    expect(allValuesInArrayAreNotEqual([1, 1, 2])).toEqual(true);
    expect(allValuesInArrayAreNotEqual(['a', 'b'])).toEqual(true);
  });

  it('should throw an error when argument is not an array', () => {
    expect(() => {
      //@ts-ignore
      allValuesInArrayAreNotEqual(42);
    }).toThrow(new Error('Arg is not an array'));

    expect(() => {
      /**
       * I do also want to test the case if someone really ignores every compile time hint and passes something
       * not 'array-like' as parameter, because of that i neet to ts-ignore
       */
      // @ts-ignore
      allValuesInArrayAreNotEqual(42);
    }).toThrow(new Error('Arg is not an array'));
  });
});
