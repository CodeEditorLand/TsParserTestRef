// @noEmit: true

// @Filename: /a.ts

// @Filename: /b.ts
import type { A } from "./a";
import type { B } from "./b";

export type A = B;

export type B = A;
