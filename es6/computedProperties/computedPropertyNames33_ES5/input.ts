// @target: es5
function foo<T>() {
	return "";
}
class C<T> {
	bar() {
		var obj = {
			[foo<T>()]() {},
		};
		return 0;
	}
}
