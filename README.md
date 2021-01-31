# fp-ts-bigint
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/fp-ts-bigint)
[![Build status][]](https://travis-ci.org/ericcrosson/fp-ts-bigint)
[![Code Coverage][]](https://codecov.io/gh/ericcrosson/fp-ts-bigint)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/fp-ts-bigint.svg
[Build status]: https://travis-ci.org/ericcrosson/fp-ts-bigint.svg?branch=master
[Code Coverage]: https://codecov.io/gh/ericcrosson/fp-ts-bigint/branch/master/graph/badge.svg

> BigInt library for fp-ts

As not every JavaScript runtime supports `BigInt`, this library
contains opt-in `bigint` functions absent from
[fp-ts](https://github.com/gcanti/fp-ts):

- [X] `Eq`
- [X] `Ord`
- [X] `Show`
- [ ] `Field`
- [X] `semigroupSum`
- [X] `semigroupProduct`
- [X] `monoidSum`
- [X] `monoidProduct`

## Install

``` shell
npm install fp-ts-bigint
```

## Use

Same as fp-ts

``` typescript
import * as B from 'fp-ts/bigint'

B.semigroupSum.concat(2n, 3n) // => 5n
B.semigroupProduct.concat(2n, 5n) // => 10n
```

## Related

- [original fp-ts PR](https://github.com/gcanti/fp-ts/pull/1386)

## Acknowledgments

- [fp-ts](https://github.com/gcanti/fp-ts)
