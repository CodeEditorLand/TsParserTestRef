// @Filename: /b.js
import * as a from "./a";

// @allowJs: true
// @checkJs: true
// @noEmit: true

// @Filename: /a.js
export class A {}

/** @augments a.A */
class B {}
