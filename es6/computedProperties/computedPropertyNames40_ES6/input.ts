// @target: es6
class Foo {
	x;
}
class Foo2 {
	x;
	y;
}

class C {
	[s: string]: () => Foo2;

	// Computed properties
	[""]() {
		return new Foo();
	}
	[""]() {
		return new Foo2();
	}
}
