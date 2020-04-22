[![npm](https://img.shields.io/github/package-json/v/mikelgo/ts-utils?style=flat-square)](https://www.npmjs.com/package/mikelgo/ts-utils)
[![npm](https://img.shields.io/circleci/build/github/mikelgo/ts-utils/master?style=flat-square&token=9bb3fb5d157d1879a923930910ee034891bf15a9)](https://www.npmjs.com/package/mikelgo/ts-utils)
[![npm](https://img.shields.io/npm/l/@mikelgo/ts-utils?style=flat-square)](https://www.npmjs.com/package/mikelgo/ts-utils)
[![codecov](https://codecov.io/gh/mikelgo/ts-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/mikelgo/ts-utils)

# Ts-utils

Ts-utils is a small library providing some TypeScript utility functions to deal with objects and arrays.

## Installation

Use npm to install:

```bash
    $ npm i @mikelgo/ts-utils
```

## Usage

Just import the util-function you want to use by importing it from the lib.

Example:

```typescript
import {isValid} from '@mikelgo/ts-utils/common-utils'

    if(isValid(somethingToCheck){
        // ...execute some code
    })
```

## Overview

Currently the library does support 12 utility-functions.

### Common utils

- `isValid`
- `isNotValid`
- `isObject`
- `isNotObject`
- `isObjectOrArray`
- `isNotObjectOrArray`
- `noNullValues`
- `notNull`

### Array utils

- `isArray`
- `isNotArray`
- `isEmptyArray`
- `isNotEmptyArray`
- `allValuesInArrayAreEqual`
- `allValuesInArrayAreNotEqual`

For the full documentation see:

- [Object utils doc](./src/common/README.md)
- [Array utils doc](./src/array/README.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
