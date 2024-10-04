//@filename: bar.ts
import { foo } from "./foo";

//@module: commonjs
//@filename: foo.ts

export function foo() {}

// These should emit identically
<any>foo;
foo as any;
