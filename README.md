# fp-ts-bigint

[![Build Status][]](https://github.com/EricCrosson/fp-ts-bigint/actions/workflows/release.yml)

[build status]: https://github.com/EricCrosson/fp-ts-bigint/actions/workflows/release.yml/badge.svg?branch=master&event=push

> BigInt library for fp-ts

As not every JavaScript runtime supports `BigInt`, this library contains opt-in
`bigint` functions absent from [fp-ts](https://github.com/gcanti/fp-ts):

- [x] `Eq`
- [x] `Ord`
- [x] `Show`
- [ ] `Field`
- [x] `semigroupSum`
- [x] `semigroupProduct`
- [x] `monoidSum`
- [x] `monoidProduct`
- [x] `magmaSub`

## Install

```shell
npm install fp-ts-bigint
```

## Use

Same as fp-ts

```typescript
import * as B from "fp-ts-bigint";

B.semigroupSum.concat(2n, 3n); // => 5n
B.semigroupProduct.concat(2n, 5n); // => 10n
```

## Related

- [original fp-ts PR](https://github.com/gcanti/fp-ts/pull/1386)

## Acknowledgments

- [fp-ts](https://github.com/gcanti/fp-ts)
