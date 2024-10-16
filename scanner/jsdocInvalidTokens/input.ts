// @Filename: jsdocInvalidTokens.js
// @strict: true
// @allowJs: true
// @checkJs: true
// @noEmit: true

/**
 *
 * unicode-escape = "\u{abcdefghi}" -- should not have error for invalid unicode escape
 * unicode-escape2 = "qq\u{abcdefghi}" -- no error here either
 * quoted-pair = "\" -- should not have error for invalid quote sequence
 * or for the tag below:
 * @private
 */
var hi = 1;
