// @filename: component.tsx
/** @jsx predom */
import prerendered from "./component";
// @filename: index.tsx
/** @jsx dom */
import { dom } from "./renderer";
import { predom } from "./renderer2";

// @jsx: react
// @filename: renderer.d.ts
declare global {
	namespace JSX {
		interface IntrinsicElements {
			[e: string]: {};
		}
		interface Element {
			__domBrand: void;
			children: Element[];
			props: {};
		}
		interface ElementAttributesProperty {
			props: any;
		}
		interface ElementChildrenAttribute {
			children: any;
		}
	}
}
export function dom(): JSX.Element;
// @filename: renderer2.d.ts
export namespace predom {
	namespace JSX {
		interface IntrinsicElements {
			[e: string]: {};
		}
		interface Element {
			__predomBrand: void;
			children: Element[];
			props: {};
		}
		interface ElementAttributesProperty {
			props: any;
		}
		interface ElementChildrenAttribute {
			children: any;
		}
	}
}
export function predom(): predom.JSX.Element;

export default <h></h>;

let elem = prerendered;
elem = <h></h>; // Expect assignability error here
