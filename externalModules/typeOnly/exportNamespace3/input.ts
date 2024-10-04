// @Filename: d.ts
import { a } from "./c";

// @Filename: a.ts
export class A {}

// @Filename: b.ts
export type { A } from "./a";

// @Filename: c.ts
export * as a from "./b";

new a.A(); // Error
