//@filename: file.tsx
//@jsx: preserve
declare module JSX {
	interface Element {}
	interface ElementAttributesProperty {}
	interface IntrinsicElements {}
}

interface Obj1type {
	new (n: string): any;
}
var Obj1: Obj1type;
<Obj1 x={10} />; // OK

interface Obj2type {
	new (n: string): { q?: number };
}
var Obj2: Obj2type;
<Obj2 x={10} />; // Error

interface Obj3type {
	new (n: string): { x: number };
}
var Obj3: Obj3type;
<Obj3 x={10} />; // OK
