// @Filename: /b.ts
import { Z as Y } from "./a";
// @Filename: /c.ts
import type { C } from "./b";
// @Filename: /d.ts
import { D } from "./c";

// @Filename: /a.ts
class A {
	a!: string;
}
export type { A as B };
export type Z = A;

export { B as C } from "./a";

export { C as D };

new D();
const d: D = {};
