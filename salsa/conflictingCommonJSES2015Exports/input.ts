// @Filename: use.js
import { abc } from "./bug24934";

// @checkJs: true
// @allowJS: true
// @noEmit: true
// @Filename: bug24934.js
export function abc(a, b, c) {
	return 5;
}
module.exports = { abc };

abc(1, 2, 3);
