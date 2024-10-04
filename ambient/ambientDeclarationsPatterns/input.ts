// @Filename: user.ts
///<reference path="declarations.d.ts" />
import { baz, foo } from "foobarbaz";
import { foos } from "foosball";

// Works with relative file name
import fileText from "./file!text";

// @Filename: declarations.d.ts
declare module "foo*baz" {
	export function foo(s: string): void;
}
// Augmentations still work
declare module "foo*baz" {
	export const baz: string;
}

// Longest prefix wins
declare module "foos*" {
	export const foos: string;
}

declare module "*!text" {
	const x: string;
	export default x;
}

foo(baz);

foo(foos);

foo(fileText);
