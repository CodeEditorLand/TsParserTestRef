// @Filename: user.ts
///<reference path="declarations.d.ts"/>
import * as baz from "fs";
import foo, { bar } from "jquery";

// @Filename: declarations.d.ts
declare module "jquery";
// Semicolon is optional
declare module "fs";

import boom = require("jquery");
foo(bar, baz, boom);
