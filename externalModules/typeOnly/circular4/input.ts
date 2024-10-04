// @noEmit: true

// @Filename: /a.ts

// @Filename: /b.ts
import type { ns1 } from "./a";
import type { ns2 } from "./b";

export namespace ns1 {
	export namespace nested {
		export type T = ns2.nested.T;
	}
}

export namespace ns2 {
	export namespace nested {
		export type T = ns1.nested.T;
	}
}
