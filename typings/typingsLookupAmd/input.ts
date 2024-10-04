// @filename: /x/node_modules/@types/b/index.d.ts
import { A } from "a";
// @filename: /x/y/foo.ts
import { B } from "b";

// @traceResolution: true
// @noImplicitReferences: true
// @currentDirectory: /
// @module: amd

// @filename: /node_modules/@types/a/index.d.ts
export declare class A {}

export declare class B extends A {}
