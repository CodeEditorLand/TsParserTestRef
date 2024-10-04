// @filename: 1.ts
import * as anotherModule from "./anotherModule";
import * as defaultModule from "./defaultPath";

// @module: commonjs
// @target: es6
// @noImplicitAny: true

// @filename: anotherModule.ts
export class D {}

// @filename: defaultPath.ts
export class C {}

let p1: Promise<typeof anotherModule> = import("./defaultPath");
let p2 = import("./defaultPath") as Promise<typeof anotherModule>;
let p3: Promise<any> = import("./defaultPath");
