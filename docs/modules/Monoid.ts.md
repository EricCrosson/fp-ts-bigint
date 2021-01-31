---
title: Monoid.ts
nav_order: 1
parent: Modules
---

## Monoid overview

`Monoid` extends the power of `Semigroup` by providing an additional `empty` value.

```ts
interface Semigroup<A> {
  readonly concat: (x: A, y: A) => A
}

interface Monoid<A> extends Semigroup<A> {
  readonly empty: A
}
```

This `empty` value should be an identity for the `concat` operation, which means the following equalities hold for any choice of `x`.

```ts
concat(x, empty) = concat(empty, x) = x
```

Many types that form a `Semigroup` also form a `Monoid`, such as `number`s (with `0`) and `string`s (with `''`).

```ts
import { Monoid } from 'fp-ts/Monoid'

const monoidString: Monoid<string> = {
  concat: (x, y) => x + y,
  empty: '',
}
```

_Adapted from https://typelevel.org/cats_

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [instances](#instances)
  - [monoidProductBigInt](#monoidproductbigint)
  - [monoidSumBigInt](#monoidsumbigint)

---

# instances

## monoidProductBigInt

`bigint` monoid under multiplication.

The `empty` value is `BigInt(1)`.

**Signature**

```ts
export declare const monoidProductBigInt: Monoid<bigint>
```

**Example**

```ts
import * as M from 'fp-ts-bigint/Monoid'

assert.deepStrictEqual(M.monoidProductBigInt.concat(BigInt(2), BigInt(3)), BigInt(6))
```

Added in v2.10.0

## monoidSumBigInt

`bigint` monoid under addition.

The `empty` value is `BigInt(0)`.

**Signature**

```ts
export declare const monoidSumBigInt: Monoid<bigint>
```

**Example**

```ts
import * as M from 'fp-ts-bigint/Monoid'

assert.deepStrictEqual(M.monoidSumBigInt.concat(BigInt(2), BigInt(3)), BigInt(5))
```

Added in v2.10.0
