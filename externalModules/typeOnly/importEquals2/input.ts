// @Filename: /b.ts
import * as a from "./a";

// @esModuleInterop: true

// @Filename: /a.ts
class A {}
export type { A };

export = a;

// @Filename: /c.ts
import a = require("./b");
new a.A(); // Error
