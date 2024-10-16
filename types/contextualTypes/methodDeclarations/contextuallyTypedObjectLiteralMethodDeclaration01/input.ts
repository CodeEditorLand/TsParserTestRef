// @noImplicitAny: true

interface A {
	numProp: number;
}

interface B {
	strProp: string;
}

interface Foo {
	method1(arg: A): void;
	method2(arg: B): void;
}

function getFoo1(): Foo {
	return {
		method1(arg) {
			arg.numProp = 10;
		},
		method2(arg) {
			arg.strProp = "hello";
		},
	};
}

function getFoo2(): Foo {
	return {
		method1: (arg) => {
			arg.numProp = 10;
		},
		method2: (arg) => {
			arg.strProp = "hello";
		},
	};
}

function getFoo3(): Foo {
	return {
		method1: function (arg) {
			arg.numProp = 10;
		},
		method2: function (arg) {
			arg.strProp = "hello";
		},
	};
}
