// @noEmit: true

// @Filename: /a.ts

// @Filename: /b.ts
import type { B } from "./a";
import type { A } from "./b";

export type { A as B };

export type { B as A };
