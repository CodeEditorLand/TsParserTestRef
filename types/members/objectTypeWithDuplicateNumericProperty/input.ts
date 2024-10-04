// numeric properties must be distinct after a ToNumber operation
// so the below are all errors

class C {
	1;
	1.0;
	1;
	1.0;
}

interface I {
	1;
	1.0;
	1;
	1.0;
}

var a: {
	1;
	1.0;
	1;
	1.0;
};

var b = {
	1: 1,
	1.0: 1,
	1: 1,
	1.0: 1,
};
