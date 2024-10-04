﻿// @target: es5

interface ISomething {
	foo: string;
	bar: string;
}

function foo({}, { foo, bar }: ISomething) {}

function baz([], { foo, bar }: ISomething) {}

function one([], {}) {}

function two([], [a, b, c]: number[]) {}
