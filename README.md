# fp-ts-bigint
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/fp-ts-bigint)
[![Build status][]](https://travis-ci.org/ericcrosson/fp-ts-bigint)
[![Code Coverage][]](https://codecov.io/gh/ericcrosson/fp-ts-bigint)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/fp-ts-bigint.svg
[Build status]: https://travis-ci.org/ericcrosson/fp-ts-bigint.svg?branch=master
[Code Coverage]: https://codecov.io/gh/ericcrosson/fp-ts-bigint/branch/master/graph/badge.svg

> BigInt library for fp-ts 2

Though `eqBigInt` and `ordBigInt` were merged into [fp-ts](https://github.com/gcanti/fp-ts) in
[version 2.10.0](https://github.com/gcanti/fp-ts/pull/1385), the
`bigint` monoids could not be merged without a breaking change as not
all JavaScript runtimes support the `BigInt` constructor.

This library contains opt-in `bigint` functions absent from fp-ts 2.

## Install

``` shell
npm install fp-ts-bigint
```

## Use

Same as fp-ts

``` typescript
import { semigroupProductBigInt } from 'fp-ts-bigint/Semigroup'
import { monoidSumBigInt } from 'fp-ts-bigint/Monoid'

semigroupProductBigInt.concat(2n, 5n) // => 10n
monoidSumBigInt.concat(2n, 3n) // => 5n
```

## Related

- [original fp-ts PR](https://github.com/gcanti/fp-ts/pull/1386)

## Acknowledgments

- [fp-ts](https://github.com/gcanti/fp-ts)
