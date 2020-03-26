import {
  isArray,
  isEmptyArray,
  isNotArray,
  isNotEmptyArray,
  allValuesInArrayAreEqual,
  allValuesInArrayAreNotEqual
} from '../array-utils';
import {
  arrayValues,
  arrayValuesAsArray,
  primitiveValues,
  primitiveValuesAsArray,
  objectValues,
  objectValuesAsArray
} from '../test-utils';
describe('[Array utils]', () => {
  it('isArray() should return true if the input is an array', () => {
    expect(isArray(arrayValues.empty)).toEqual(true);
    expect(isArray(arrayValues.strings)).toEqual(true);
  });

  it('isArray() should return false if the input is not an array', () => {
    expect(isArray(primitiveValues.null)).toEqual(false);
    expect(isArray(primitiveValues.unde)).toEqual(false);
    expect(isArray(primitiveValues.number)).toEqual(false);
    expect(isArray(primitiveValues.string)).toEqual(false);
    expect(isArray(primitiveValues.true)).toEqual(false);
  });

  it('isNotArray() should return true if the input is not an array', () => {
    expect(isNotArray(primitiveValues.null)).toEqual(true);
    expect(isNotArray(primitiveValues.unde)).toEqual(true);
    expect(isNotArray(primitiveValues.number)).toEqual(true);
    expect(isNotArray(primitiveValues.string)).toEqual(true);
    expect(isNotArray(primitiveValues.true)).toEqual(true);
  });

  it('isNotArray() should return false if the input is an array', () => {
    expect(isNotArray(arrayValues.empty)).toEqual(false);
    expect(isNotArray(arrayValues.strings)).toEqual(false);
  });

  it('isEmptyArray() should return true if the incoming array is empty', () => {
    expect(isEmptyArray(arrayValues.empty)).toEqual(true);
  });

  it('isEmptyArray() should return false if the incoming array is not empty', () => {
    expect(isEmptyArray(arrayValues.strings)).toEqual(false);
  });

  it('isEmptyArray() should throw an error when argument is not an array', () => {
    // https://stackoverflow.com/a/4144803/9620995
    primitiveValuesAsArray.forEach((value) => {
      expect(() => {
        isEmptyArray(value);
      }).toThrow(new Error('Argument is not an array.'));
    });
  });

  it('isNotEmptyArray() should return true when the incoming array is not empty', () => {
    expect(isNotEmptyArray(arrayValues.strings)).toEqual(true);
  });

  it('isNotEmptyArray() should return false when the incoming array is empty or is no array', () => {
    expect(isNotEmptyArray(arrayValues.empty)).toEqual(false);
  });

  it('isNotEmptyArray() should throw an error when argument is not an array', () => {
    primitiveValuesAsArray.forEach((value) => {
      expect(() => {
        isNotEmptyArray(value);
      }).toThrow(new Error('Argument is not an array.'));
    });
  });

  it('allValuesInArrayAreEqual() should return true if all arguments are the same', () => {
    expect(allValuesInArrayAreEqual([1, 1, 1])).toEqual(true);
    expect(allValuesInArrayAreEqual(['a', 'a'])).toEqual(true);
  });

  it('allValuesInArrayAreEqual() should return false if all arguments are not equal', () => {
    expect(allValuesInArrayAreEqual([1, 1, 2])).toEqual(false);
    expect(allValuesInArrayAreEqual(['a', 'b'])).toEqual(false);
  });

  it('allValuesInArrayAreEqual() should throw an error when argument is not an array', () => {
    primitiveValuesAsArray.forEach((value) => {
      expect(() => {
        allValuesInArrayAreEqual(value);
      }).toThrow(new Error('Arg is not an array'));
    });
    objectValuesAsArray.forEach((value) => {
      expect(() => {
        /**
         * I do also want to test the case if someone really ignores every compile time hint and passes something
         * not 'array-like' as parameter, because of that i neet to ts-ignore
         */
        // @ts-ignore
        allValuesInArrayAreEqual(value);
      }).toThrow(new Error('Arg is not an array'));
    });
  });

  it('allValuesInArrayAreNotEqual() should return false if all arguments are the same', () => {
    expect(allValuesInArrayAreNotEqual([1, 1, 1])).toEqual(false);
    expect(allValuesInArrayAreNotEqual(['a', 'a'])).toEqual(false);
  });

  it('allValuesInArrayAreNotEqual() should return true if all arguments are not equal', () => {
    expect(allValuesInArrayAreNotEqual([1, 1, 2])).toEqual(true);
    expect(allValuesInArrayAreNotEqual(['a', 'b'])).toEqual(true);
  });

  it('allValuesInArrayAreNotEqual() should throw an error when argument is not an array', () => {
    primitiveValuesAsArray.forEach((value) => {
      expect(() => {
        allValuesInArrayAreNotEqual(value);
      }).toThrow(new Error('Arg is not an array'));
    });
    objectValuesAsArray.forEach((value) => {
      expect(() => {
        /**
         * I do also want to test the case if someone really ignores every compile time hint and passes something
         * not 'array-like' as parameter, because of that i neet to ts-ignore
         */
        // @ts-ignore
        allValuesInArrayAreNotEqual(value);
      }).toThrow(new Error('Arg is not an array'));
    });
  });
});
