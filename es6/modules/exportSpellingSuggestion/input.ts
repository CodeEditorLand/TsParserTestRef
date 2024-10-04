// @filename: b.ts
import { assertNevar } from "./a";

// @filename: a.ts
export function assertNever(x: never, msg: string) {
	throw new Error("Unexpected " + msg);
}
