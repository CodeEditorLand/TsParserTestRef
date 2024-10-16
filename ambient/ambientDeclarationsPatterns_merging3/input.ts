import { OhNo } from "b.foo";

// @filename: types.ts
declare module "*.foo" {
	export interface OhNo {
		star: string;
	}
}

// @filename: test.ts
declare module "a.foo" {
	export interface OhNo {
		a: string;
	}
}

declare let ohno: OhNo;
ohno.a; // oh no
