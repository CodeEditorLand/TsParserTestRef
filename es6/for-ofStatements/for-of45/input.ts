﻿//@target: ES6
var k: string, v: boolean;
var map = new Map([["", true]]);
for ([k = "", v = false] of map) {
	k;
	v;
}
