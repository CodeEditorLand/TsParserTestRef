//@target: ES6
class Bar {
	x;
}
class Foo extends Bar {
	y;
}
class FooIterator {
	next() {
		return {
			value: new Foo(),
			done: false,
		};
	}

	[Symbol.iterator]() {
		return this;
	}
}

var a: Bar, b: Bar;
[a, b] = new FooIterator();
