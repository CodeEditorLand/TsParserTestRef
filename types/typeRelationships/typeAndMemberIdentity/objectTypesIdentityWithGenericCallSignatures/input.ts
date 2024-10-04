// object types are identical structurally

class A {
	foo<T>(x: T): T {
		return null;
	}
}

class B<T> {
	foo(x: T): T {
		return null;
	}
}

class C<T> {
	foo(x: T): T {
		return null;
	}
}

interface I<T> {
	foo(x: T): T;
}

interface I2 {
	foo<T>(x: T): T;
}

var a: { foo<T>(x: T): T };
var b = {
	foo<T>(x: T) {
		return x;
	},
};

function foo1(x: A);
function foo1(x: A); // error
function foo1(x: any) {}

function foo1b(x: B<string>);
function foo1b(x: B<string>); // error
function foo1b(x: any) {}

function foo1c(x: C<string>);
function foo1c(x: C<string>); // error
function foo1c(x: any) {}

function foo2(x: I<string>);
function foo2(x: I<string>); // error
function foo2(x: any) {}

function foo3(x: typeof a);
function foo3(x: typeof a); // error
function foo3(x: any) {}

function foo4(x: typeof b);
function foo4(x: typeof b); // error
function foo4(x: any) {}

function foo5(x: A);
function foo5(x: B<string>); // ok
function foo5(x: any) {}

function foo5b(x: A);
function foo5b(x: C<string>); // ok
function foo5b(x: any) {}

function foo6(x: A);
function foo6(x: I<string>); // ok
function foo6(x: any) {}

function foo7(x: A);
function foo7(x: typeof a); // error
function foo7(x: any) {}

function foo8(x: B<string>);
function foo8(x: I<string>); // error
function foo8(x: any) {}

function foo9(x: B<string>);
function foo9(x: C<string>); // error
function foo9(x: any) {}

function foo10(x: B<string>);
function foo10(x: typeof a); // ok
function foo10(x: any) {}

function foo11(x: B<string>);
function foo11(x: typeof b); // ok
function foo11(x: any) {}

function foo12(x: I<string>);
function foo12(x: C<string>); // error
function foo12(x: any) {}

function foo12b(x: I2);
function foo12b(x: C<string>); // ok
function foo12b(x: any) {}

function foo13(x: I<string>);
function foo13(x: typeof a); // ok
function foo13(x: any) {}

function foo14(x: I<string>);
function foo14(x: typeof b); // ok
function foo14(x: any) {}

function foo15(x: I2);
function foo15(x: C<number>); // ok
function foo15(x: any) {}
