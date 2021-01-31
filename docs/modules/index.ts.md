---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v2.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [instances](#instances)
  - [Eq](#eq)
  - [Ord](#ord)
  - [Show](#show)
  - [monoidProduct](#monoidproduct)
  - [monoidSum](#monoidsum)
  - [semigroupProduct](#semigroupproduct)
  - [semigroupSum](#semigroupsum)

---

# instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<bigint>
```

Added in v2.0.0

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<bigint>
```

Added in v2.0.0

## Show

**Signature**

```ts
export declare const Show: S.Show<bigint>
```

Added in v2.0.0

## monoidProduct

`bigint` monoid under multiplication.

The `empty` value is `BigInt(1)`.

**Signature**

```ts
export declare const monoidProduct: Monoid<bigint>
```

**Example**

```ts
import * as B from 'fp-ts-bigint'

assert.deepStrictEqual(B.monoidProduct.concat(BigInt(2), BigInt(3)), BigInt(6))
```

Added in v2.0.0

## monoidSum

`bigint` monoid under addition.

The `empty` value is `BigInt(0)`.

**Signature**

```ts
export declare const monoidSum: Monoid<bigint>
```

**Example**

```ts
import * as B from 'fp-ts-bigint'

assert.deepStrictEqual(B.monoidSum.concat(BigInt(2), BigInt(3)), BigInt(5))
```

Added in v2.0.0

## semigroupProduct

`bigint` semigroup under multiplication.

**Signature**

```ts
export declare const semigroupProduct: Semigroup<bigint>
```

**Example**

```ts
import * as B from 'fp-ts-bigint'

assert.deepStrictEqual(B.semigroupProduct.concat(BigInt(2), BigInt(3)), BigInt(6))
```

Added in v2.0.0

## semigroupSum

`bigint` semigroup under addition.

**Signature**

```ts
export declare const semigroupSum: Semigroup<bigint>
```

**Example**

```ts
import * as B from 'fp-ts-bigint'

assert.deepStrictEqual(B.semigroupSum.concat(BigInt(2), BigInt(3)), BigInt(5))
```

Added in v2.0.0
