﻿// @declaration: true

function f(x: "foo"): number;
function f(x: string): number;
function f(x: string): number {
	return 0;
}

function g(x: "foo"): number;
function g(x: string): number {
	return 0;
}

let a = f;
let b = g;

a = b;
b = a;
