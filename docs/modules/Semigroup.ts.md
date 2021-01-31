---
title: Semigroup.ts
nav_order: 2
parent: Modules
---

## Semigroup overview

If a type `A` can form a `Semigroup` it has an **associative** binary operation.

```ts
interface Semigroup<A> {
  readonly concat: (x: A, y: A) => A
}
```

Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.

```ts
concat(x, concat(y, z)) = concat(concat(x, y), z)
```

A common example of a semigroup is the type `string` with the operation `+`.

```ts
import { Semigroup } from 'fp-ts/Semigroup'

const semigroupString: Semigroup<string> = {
  concat: (x, y) => x + y,
}

const x = 'x'
const y = 'y'
const z = 'z'

semigroupString.concat(x, y) // 'xy'

semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'

semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
```

_Adapted from https://typelevel.org/cats_

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [instances](#instances)
  - [semigroupProductBigInt](#semigroupproductbigint)
  - [semigroupSumBigInt](#semigroupsumbigint)

---

# instances

## semigroupProductBigInt

`bigint` semigroup under multiplication.

**Signature**

```ts
export declare const semigroupProductBigInt: Semigroup<bigint>
```

**Example**

```ts
import * as S from 'fp-ts-bigint/Semigroup'

assert.deepStrictEqual(S.semigroupProductBigInt.concat(BigInt(2), BigInt(3)), BigInt(6))
```

Added in v2.10.0

## semigroupSumBigInt

`bigint` semigroup under addition.

**Signature**

```ts
export declare const semigroupSumBigInt: Semigroup<bigint>
```

**Example**

```ts
import * as S from 'fp-ts-bigint/Semigroup'

assert.deepStrictEqual(S.semigroupSumBigInt.concat(BigInt(2), BigInt(3)), BigInt(5))
```

Added in v2.10.0
