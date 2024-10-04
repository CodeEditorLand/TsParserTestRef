//@filename: react-consumer.tsx
import { React } from "./test";

//@jsx: react
//@module: commonjs

//@filename: file.tsx
declare module JSX {
	interface Element {}
	interface IntrinsicElements {
		[s: string]: any;
	}
}

//@filename: test.d.ts
export var React;

// Should emit test_1.React.createElement
//  and React.__spread
var foo: any;
var spread1 = <div x="" {...foo} y="" />;
