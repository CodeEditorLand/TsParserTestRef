// @target: es5
class C {
	bar() {
		return 0;
	}
	[this.bar()]() {}
}
