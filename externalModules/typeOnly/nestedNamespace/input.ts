// @Filename: b.ts
import type * as a from "./a";

// @Filename: a.ts
export namespace types {
	export class A {}
}

interface B extends a.types.A {}
