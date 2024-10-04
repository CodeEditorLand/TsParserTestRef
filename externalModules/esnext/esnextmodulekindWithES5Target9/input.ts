// @target: es5
// @module: esnext

import d, { a } from "mod";
import * as M from "mod";

export { a };

export { M };

export { d };

export * from "mod";

export { b } from "mod";

export default d;
