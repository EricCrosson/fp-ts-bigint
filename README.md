# fp-ts-bigint
[![Release][]](https://github.com/EricCrosson/fp-ts-bigint/actions/workflows/release.yml)
[![NPM Package][]](https://npmjs.org/package/fp-ts-bigint)
[![Code Coverage][]](https://codecov.io/gh/EricCrosson/fp-ts-bigint)
[![License][]](https://opensource.org/licenses/ISC)

[release]: https://github.com/EricCrosson/fp-ts-bigint/actions/workflows/release.yml/badge.svg?branch=master&event=push
[npm package]: https://img.shields.io/npm/v/fp-ts-bigint.svg
[code coverage]: https://codecov.io/gh/EricCrosson/fp-ts-bigint/branch/master/graph/badge.svg
[license]: https://img.shields.io/badge/License-ISC-blue.svg

> BigInt library for fp-ts

As not every JavaScript runtime supports `BigInt`, this library contains opt-in
`bigint` functions absent from [fp-ts](https://github.com/gcanti/fp-ts):

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
import * as B from 'fp-ts-bigint'

B.semigroupSum.concat(2n, 3n) // => 5n
B.semigroupProduct.concat(2n, 5n) // => 10n
```

## Related

- [original fp-ts PR](https://github.com/gcanti/fp-ts/pull/1386)

## Acknowledgments

- [fp-ts](https://github.com/gcanti/fp-ts)
