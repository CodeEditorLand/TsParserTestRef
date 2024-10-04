// @Filename: reExportUser.ts
import * as $ from "./reExportAll";
import { x } from "./reExportX";

// @Filename: declarations.d.ts
declare module "jquery";

// @Filename: reExportX.ts
export { x } from "jquery";

// @Filename: reExportAll.ts
export * from "jquery";

// '$' is not callable, it is an object.
x($);
