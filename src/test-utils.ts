/**
 * Test helpers
 */
export const primitiveValues = {
  number: 42,
  null: null,
  unde: undefined,
  string: 'some string',
  true: true,
  false: false
};

export const primitiveValuesAsArray = Array.from(Object.values(primitiveValues));

export const objectValues = {
  empty: {},
  any: { id: 1, name: 'test' }
};

export const objectValuesAsArray = Array.from(Object.values(objectValues));

export const arrayValues = {
  empty: [],
  strings: ['a', 'b', 'c'],
  numbers: [1, 2, 3],
  boolean: [true, false],
  null: [null],
  undefined: [undefined]
};

export const arrayValuesAsArray = Array.from(Object.values(arrayValues));
