// @allowUnreachableCode: true

class Base {
	private p;
}
class Derived1 extends Base {
	private m;
}
class Derived2 extends Base {
	private n;
}
interface Genric<T> {
	func(n: T[]);
}
var b = new Base(),
	d1 = new Derived1(),
	d2 = new Derived2();
var x1: () => Base[] = () => [d1, d2];
var x2: () => Base[] = function () {
	return [d1, d2];
};
var x3: () => Base[] = function named() {
	return [d1, d2];
};
var x4: { (): Base[] } = () => [d1, d2];
var x5: { (): Base[] } = function () {
	return [d1, d2];
};
var x6: { (): Base[] } = function named() {
	return [d1, d2];
};
var x7: Base[] = [d1, d2];
var x8: Array<Base> = [d1, d2];
var x9: { [n: number]: Base } = [d1, d2];
var x10: { n: Base[] } = { n: [d1, d2] };
var x11: (s: Base[]) => any = (n) => {
	var n: Base[];
	return null;
};
var x12: Genric<Base> = {
	func: (n) => {
		return [d1, d2];
	},
};
class x13 {
	member: () => Base[] = () => [d1, d2];
}
class x14 {
	member: () => Base[] = function () {
		return [d1, d2];
	};
}
class x15 {
	member: () => Base[] = function named() {
		return [d1, d2];
	};
}
class x16 {
	member: { (): Base[] } = () => [d1, d2];
}
class x17 {
	member: { (): Base[] } = function () {
		return [d1, d2];
	};
}
class x18 {
	member: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
class x19 {
	member: Base[] = [d1, d2];
}
class x20 {
	member: Array<Base> = [d1, d2];
}
class x21 {
	member: { [n: number]: Base } = [d1, d2];
}
class x22 {
	member: { n: Base[] } = { n: [d1, d2] };
}
class x23 {
	member: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
class x24 {
	member: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
class x25 {
	private member: () => Base[] = () => [d1, d2];
}
class x26 {
	private member: () => Base[] = function () {
		return [d1, d2];
	};
}
class x27 {
	private member: () => Base[] = function named() {
		return [d1, d2];
	};
}
class x28 {
	private member: { (): Base[] } = () => [d1, d2];
}
class x29 {
	private member: { (): Base[] } = function () {
		return [d1, d2];
	};
}
class x30 {
	private member: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
class x31 {
	private member: Base[] = [d1, d2];
}
class x32 {
	private member: Array<Base> = [d1, d2];
}
class x33 {
	private member: { [n: number]: Base } = [d1, d2];
}
class x34 {
	private member: { n: Base[] } = { n: [d1, d2] };
}
class x35 {
	private member: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
class x36 {
	private member: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
class x37 {
	public member: () => Base[] = () => [d1, d2];
}
class x38 {
	public member: () => Base[] = function () {
		return [d1, d2];
	};
}
class x39 {
	public member: () => Base[] = function named() {
		return [d1, d2];
	};
}
class x40 {
	public member: { (): Base[] } = () => [d1, d2];
}
class x41 {
	public member: { (): Base[] } = function () {
		return [d1, d2];
	};
}
class x42 {
	public member: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
class x43 {
	public member: Base[] = [d1, d2];
}
class x44 {
	public member: Array<Base> = [d1, d2];
}
class x45 {
	public member: { [n: number]: Base } = [d1, d2];
}
class x46 {
	public member: { n: Base[] } = { n: [d1, d2] };
}
class x47 {
	public member: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
class x48 {
	public member: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
class x49 {
	static member: () => Base[] = () => [d1, d2];
}
class x50 {
	static member: () => Base[] = function () {
		return [d1, d2];
	};
}
class x51 {
	static member: () => Base[] = function named() {
		return [d1, d2];
	};
}
class x52 {
	static member: { (): Base[] } = () => [d1, d2];
}
class x53 {
	static member: { (): Base[] } = function () {
		return [d1, d2];
	};
}
class x54 {
	static member: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
class x55 {
	static member: Base[] = [d1, d2];
}
class x56 {
	static member: Array<Base> = [d1, d2];
}
class x57 {
	static member: { [n: number]: Base } = [d1, d2];
}
class x58 {
	static member: { n: Base[] } = { n: [d1, d2] };
}
class x59 {
	static member: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
class x60 {
	static member: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
class x61 {
	private static member: () => Base[] = () => [d1, d2];
}
class x62 {
	private static member: () => Base[] = function () {
		return [d1, d2];
	};
}
class x63 {
	private static member: () => Base[] = function named() {
		return [d1, d2];
	};
}
class x64 {
	private static member: { (): Base[] } = () => [d1, d2];
}
class x65 {
	private static member: { (): Base[] } = function () {
		return [d1, d2];
	};
}
class x66 {
	private static member: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
class x67 {
	private static member: Base[] = [d1, d2];
}
class x68 {
	private static member: Array<Base> = [d1, d2];
}
class x69 {
	private static member: { [n: number]: Base } = [d1, d2];
}
class x70 {
	private static member: { n: Base[] } = { n: [d1, d2] };
}
class x71 {
	private static member: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
class x72 {
	private static member: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
class x73 {
	public static member: () => Base[] = () => [d1, d2];
}
class x74 {
	public static member: () => Base[] = function () {
		return [d1, d2];
	};
}
class x75 {
	public static member: () => Base[] = function named() {
		return [d1, d2];
	};
}
class x76 {
	public static member: { (): Base[] } = () => [d1, d2];
}
class x77 {
	public static member: { (): Base[] } = function () {
		return [d1, d2];
	};
}
class x78 {
	public static member: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
class x79 {
	public static member: Base[] = [d1, d2];
}
class x80 {
	public static member: Array<Base> = [d1, d2];
}
class x81 {
	public static member: { [n: number]: Base } = [d1, d2];
}
class x82 {
	public static member: { n: Base[] } = { n: [d1, d2] };
}
class x83 {
	public static member: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
class x84 {
	public static member: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
class x85 {
	constructor(parm: () => Base[] = () => [d1, d2]) {}
}
class x86 {
	constructor(
		parm: () => Base[] = function () {
			return [d1, d2];
		},
	) {}
}
class x87 {
	constructor(
		parm: () => Base[] = function named() {
			return [d1, d2];
		},
	) {}
}
class x88 {
	constructor(parm: { (): Base[] } = () => [d1, d2]) {}
}
class x89 {
	constructor(
		parm: { (): Base[] } = function () {
			return [d1, d2];
		},
	) {}
}
class x90 {
	constructor(
		parm: { (): Base[] } = function named() {
			return [d1, d2];
		},
	) {}
}
class x91 {
	constructor(parm: Base[] = [d1, d2]) {}
}
class x92 {
	constructor(parm: Array<Base> = [d1, d2]) {}
}
class x93 {
	constructor(parm: { [n: number]: Base } = [d1, d2]) {}
}
class x94 {
	constructor(parm: { n: Base[] } = { n: [d1, d2] }) {}
}
class x95 {
	constructor(
		parm: (s: Base[]) => any = (n) => {
			var n: Base[];
			return null;
		},
	) {}
}
class x96 {
	constructor(
		parm: Genric<Base> = {
			func: (n) => {
				return [d1, d2];
			},
		},
	) {}
}
class x97 {
	constructor(public parm: () => Base[] = () => [d1, d2]) {}
}
class x98 {
	constructor(
		public parm: () => Base[] = function () {
			return [d1, d2];
		},
	) {}
}
class x99 {
	constructor(
		public parm: () => Base[] = function named() {
			return [d1, d2];
		},
	) {}
}
class x100 {
	constructor(public parm: { (): Base[] } = () => [d1, d2]) {}
}
class x101 {
	constructor(
		public parm: { (): Base[] } = function () {
			return [d1, d2];
		},
	) {}
}
class x102 {
	constructor(
		public parm: { (): Base[] } = function named() {
			return [d1, d2];
		},
	) {}
}
class x103 {
	constructor(public parm: Base[] = [d1, d2]) {}
}
class x104 {
	constructor(public parm: Array<Base> = [d1, d2]) {}
}
class x105 {
	constructor(public parm: { [n: number]: Base } = [d1, d2]) {}
}
class x106 {
	constructor(public parm: { n: Base[] } = { n: [d1, d2] }) {}
}
class x107 {
	constructor(
		public parm: (s: Base[]) => any = (n) => {
			var n: Base[];
			return null;
		},
	) {}
}
class x108 {
	constructor(
		public parm: Genric<Base> = {
			func: (n) => {
				return [d1, d2];
			},
		},
	) {}
}
class x109 {
	constructor(private parm: () => Base[] = () => [d1, d2]) {}
}
class x110 {
	constructor(
		private parm: () => Base[] = function () {
			return [d1, d2];
		},
	) {}
}
class x111 {
	constructor(
		private parm: () => Base[] = function named() {
			return [d1, d2];
		},
	) {}
}
class x112 {
	constructor(private parm: { (): Base[] } = () => [d1, d2]) {}
}
class x113 {
	constructor(
		private parm: { (): Base[] } = function () {
			return [d1, d2];
		},
	) {}
}
class x114 {
	constructor(
		private parm: { (): Base[] } = function named() {
			return [d1, d2];
		},
	) {}
}
class x115 {
	constructor(private parm: Base[] = [d1, d2]) {}
}
class x116 {
	constructor(private parm: Array<Base> = [d1, d2]) {}
}
class x117 {
	constructor(private parm: { [n: number]: Base } = [d1, d2]) {}
}
class x118 {
	constructor(private parm: { n: Base[] } = { n: [d1, d2] }) {}
}
class x119 {
	constructor(
		private parm: (s: Base[]) => any = (n) => {
			var n: Base[];
			return null;
		},
	) {}
}
class x120 {
	constructor(
		private parm: Genric<Base> = {
			func: (n) => {
				return [d1, d2];
			},
		},
	) {}
}
function x121(parm: () => Base[] = () => [d1, d2]) {}
function x122(
	parm: () => Base[] = function () {
		return [d1, d2];
	},
) {}
function x123(
	parm: () => Base[] = function named() {
		return [d1, d2];
	},
) {}
function x124(parm: { (): Base[] } = () => [d1, d2]) {}
function x125(
	parm: { (): Base[] } = function () {
		return [d1, d2];
	},
) {}
function x126(
	parm: { (): Base[] } = function named() {
		return [d1, d2];
	},
) {}
function x127(parm: Base[] = [d1, d2]) {}
function x128(parm: Array<Base> = [d1, d2]) {}
function x129(parm: { [n: number]: Base } = [d1, d2]) {}
function x130(parm: { n: Base[] } = { n: [d1, d2] }) {}
function x131(
	parm: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	},
) {}
function x132(
	parm: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	},
) {}
function x133(): () => Base[] {
	return () => [d1, d2];
}
function x134(): () => Base[] {
	return function () {
		return [d1, d2];
	};
}
function x135(): () => Base[] {
	return function named() {
		return [d1, d2];
	};
}
function x136(): { (): Base[] } {
	return () => [d1, d2];
}
function x137(): { (): Base[] } {
	return function () {
		return [d1, d2];
	};
}
function x138(): { (): Base[] } {
	return function named() {
		return [d1, d2];
	};
}
function x139(): Base[] {
	return [d1, d2];
}
function x140(): Array<Base> {
	return [d1, d2];
}
function x141(): { [n: number]: Base } {
	return [d1, d2];
}
function x142(): { n: Base[] } {
	return { n: [d1, d2] };
}
function x143(): (s: Base[]) => any {
	return (n) => {
		var n: Base[];
		return null;
	};
}
function x144(): Genric<Base> {
	return {
		func: (n) => {
			return [d1, d2];
		},
	};
}
function x145(): () => Base[] {
	return () => [d1, d2];
	return () => [d1, d2];
}
function x146(): () => Base[] {
	return function () {
		return [d1, d2];
	};
	return function () {
		return [d1, d2];
	};
}
function x147(): () => Base[] {
	return function named() {
		return [d1, d2];
	};
	return function named() {
		return [d1, d2];
	};
}
function x148(): { (): Base[] } {
	return () => [d1, d2];
	return () => [d1, d2];
}
function x149(): { (): Base[] } {
	return function () {
		return [d1, d2];
	};
	return function () {
		return [d1, d2];
	};
}
function x150(): { (): Base[] } {
	return function named() {
		return [d1, d2];
	};
	return function named() {
		return [d1, d2];
	};
}
function x151(): Base[] {
	return [d1, d2];
	return [d1, d2];
}
function x152(): Array<Base> {
	return [d1, d2];
	return [d1, d2];
}
function x153(): { [n: number]: Base } {
	return [d1, d2];
	return [d1, d2];
}
function x154(): { n: Base[] } {
	return { n: [d1, d2] };
	return { n: [d1, d2] };
}
function x155(): (s: Base[]) => any {
	return (n) => {
		var n: Base[];
		return null;
	};
	return (n) => {
		var n: Base[];
		return null;
	};
}
function x156(): Genric<Base> {
	return {
		func: (n) => {
			return [d1, d2];
		},
	};
	return {
		func: (n) => {
			return [d1, d2];
		},
	};
}
var x157: () => () => Base[] = () => {
	return () => [d1, d2];
};
var x158: () => () => Base[] = () => {
	return function () {
		return [d1, d2];
	};
};
var x159: () => () => Base[] = () => {
	return function named() {
		return [d1, d2];
	};
};
var x160: () => { (): Base[] } = () => {
	return () => [d1, d2];
};
var x161: () => { (): Base[] } = () => {
	return function () {
		return [d1, d2];
	};
};
var x162: () => { (): Base[] } = () => {
	return function named() {
		return [d1, d2];
	};
};
var x163: () => Base[] = () => {
	return [d1, d2];
};
var x164: () => Array<Base> = () => {
	return [d1, d2];
};
var x165: () => { [n: number]: Base } = () => {
	return [d1, d2];
};
var x166: () => { n: Base[] } = () => {
	return { n: [d1, d2] };
};
var x167: () => (s: Base[]) => any = () => {
	return (n) => {
		var n: Base[];
		return null;
	};
};
var x168: () => Genric<Base> = () => {
	return {
		func: (n) => {
			return [d1, d2];
		},
	};
};
var x169: () => () => Base[] = function () {
	return () => [d1, d2];
};
var x170: () => () => Base[] = function () {
	return function () {
		return [d1, d2];
	};
};
var x171: () => () => Base[] = function () {
	return function named() {
		return [d1, d2];
	};
};
var x172: () => { (): Base[] } = function () {
	return () => [d1, d2];
};
var x173: () => { (): Base[] } = function () {
	return function () {
		return [d1, d2];
	};
};
var x174: () => { (): Base[] } = function () {
	return function named() {
		return [d1, d2];
	};
};
var x175: () => Base[] = function () {
	return [d1, d2];
};
var x176: () => Array<Base> = function () {
	return [d1, d2];
};
var x177: () => { [n: number]: Base } = function () {
	return [d1, d2];
};
var x178: () => { n: Base[] } = function () {
	return { n: [d1, d2] };
};
var x179: () => (s: Base[]) => any = function () {
	return (n) => {
		var n: Base[];
		return null;
	};
};
var x180: () => Genric<Base> = function () {
	return {
		func: (n) => {
			return [d1, d2];
		},
	};
};
module x181 {
	var t: () => Base[] = () => [d1, d2];
}
module x182 {
	var t: () => Base[] = function () {
		return [d1, d2];
	};
}
module x183 {
	var t: () => Base[] = function named() {
		return [d1, d2];
	};
}
module x184 {
	var t: { (): Base[] } = () => [d1, d2];
}
module x185 {
	var t: { (): Base[] } = function () {
		return [d1, d2];
	};
}
module x186 {
	var t: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
module x187 {
	var t: Base[] = [d1, d2];
}
module x188 {
	var t: Array<Base> = [d1, d2];
}
module x189 {
	var t: { [n: number]: Base } = [d1, d2];
}
module x190 {
	var t: { n: Base[] } = { n: [d1, d2] };
}
module x191 {
	var t: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
module x192 {
	var t: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
module x193 {
	export var t: () => Base[] = () => [d1, d2];
}
module x194 {
	export var t: () => Base[] = function () {
		return [d1, d2];
	};
}
module x195 {
	export var t: () => Base[] = function named() {
		return [d1, d2];
	};
}
module x196 {
	export var t: { (): Base[] } = () => [d1, d2];
}
module x197 {
	export var t: { (): Base[] } = function () {
		return [d1, d2];
	};
}
module x198 {
	export var t: { (): Base[] } = function named() {
		return [d1, d2];
	};
}
module x199 {
	export var t: Base[] = [d1, d2];
}
module x200 {
	export var t: Array<Base> = [d1, d2];
}
module x201 {
	export var t: { [n: number]: Base } = [d1, d2];
}
module x202 {
	export var t: { n: Base[] } = { n: [d1, d2] };
}
module x203 {
	export var t: (s: Base[]) => any = (n) => {
		var n: Base[];
		return null;
	};
}
module x204 {
	export var t: Genric<Base> = {
		func: (n) => {
			return [d1, d2];
		},
	};
}
var x206 = <() => Base[]>function () {
	return [d1, d2];
};
var x207 = <() => Base[]>function named() {
	return [d1, d2];
};
var x209 = <{ (): Base[] }>function () {
	return [d1, d2];
};
var x210 = <{ (): Base[] }>function named() {
	return [d1, d2];
};
var x211 = <Base[]>[d1, d2];
var x212 = <Array<Base>>[d1, d2];
var x213 = <{ [n: number]: Base }>[d1, d2];
var x214 = <{ n: Base[] }>{ n: [d1, d2] };
var x216 = <Genric<Base>>{
	func: (n) => {
		return [d1, d2];
	},
};
var x217 =
	<() => Base[]>undefined ||
	function () {
		return [d1, d2];
	};
var x218 =
	<() => Base[]>undefined ||
	function named() {
		return [d1, d2];
	};
var x219 =
	<{ (): Base[] }>undefined ||
	function () {
		return [d1, d2];
	};
var x220 =
	<{ (): Base[] }>undefined ||
	function named() {
		return [d1, d2];
	};
var x221 = <Base[]>undefined || [d1, d2];
var x222 = <Array<Base>>undefined || [d1, d2];
var x223 = <{ [n: number]: Base }>undefined || [d1, d2];
var x224 = <{ n: Base[] }>undefined || { n: [d1, d2] };
var x225: () => Base[];
x225 = () => [d1, d2];
var x226: () => Base[];
x226 = function () {
	return [d1, d2];
};
var x227: () => Base[];
x227 = function named() {
	return [d1, d2];
};
var x228: { (): Base[] };
x228 = () => [d1, d2];
var x229: { (): Base[] };
x229 = function () {
	return [d1, d2];
};
var x230: { (): Base[] };
x230 = function named() {
	return [d1, d2];
};
var x231: Base[];
x231 = [d1, d2];
var x232: Array<Base>;
x232 = [d1, d2];
var x233: { [n: number]: Base };
x233 = [d1, d2];
var x234: { n: Base[] };
x234 = { n: [d1, d2] };
var x235: (s: Base[]) => any;
x235 = (n) => {
	var n: Base[];
	return null;
};
var x236: Genric<Base>;
x236 = {
	func: (n) => {
		return [d1, d2];
	},
};
var x237: { n: () => Base[] } = { n: () => [d1, d2] };
var x238: { n: () => Base[] } = {
	n: function () {
		return [d1, d2];
	},
};
var x239: { n: () => Base[] } = {
	n: function named() {
		return [d1, d2];
	},
};
var x240: { n: { (): Base[] } } = { n: () => [d1, d2] };
var x241: { n: { (): Base[] } } = {
	n: function () {
		return [d1, d2];
	},
};
var x242: { n: { (): Base[] } } = {
	n: function named() {
		return [d1, d2];
	},
};
var x243: { n: Base[] } = { n: [d1, d2] };
var x244: { n: Array<Base> } = { n: [d1, d2] };
var x245: { n: { [n: number]: Base } } = { n: [d1, d2] };
var x246: { n: { n: Base[] } } = { n: { n: [d1, d2] } };
var x247: { n: (s: Base[]) => any } = {
	n: (n) => {
		var n: Base[];
		return null;
	},
};
var x248: { n: Genric<Base> } = {
	n: {
		func: (n) => {
			return [d1, d2];
		},
	},
};
var x252: { (): Base[] }[] = [() => [d1, d2]];
var x253: { (): Base[] }[] = [
	function () {
		return [d1, d2];
	},
];
var x254: { (): Base[] }[] = [
	function named() {
		return [d1, d2];
	},
];
var x255: Base[][] = [[d1, d2]];
var x256: Array<Base>[] = [[d1, d2]];
var x257: { [n: number]: Base }[] = [[d1, d2]];
var x258: { n: Base[] }[] = [{ n: [d1, d2] }];
var x260: Genric<Base>[] = [
	{
		func: (n) => {
			return [d1, d2];
		},
	},
];
var x261: () => Base[] =
	function () {
		return [d1, d2];
	} || undefined;
var x262: () => Base[] =
	function named() {
		return [d1, d2];
	} || undefined;
var x263: { (): Base[] } =
	function () {
		return [d1, d2];
	} || undefined;
var x264: { (): Base[] } =
	function named() {
		return [d1, d2];
	} || undefined;
var x265: Base[] = [d1, d2] || undefined;
var x266: Array<Base> = [d1, d2] || undefined;
var x267: { [n: number]: Base } = [d1, d2] || undefined;
var x268: { n: Base[] } = { n: [d1, d2] } || undefined;
var x269: () => Base[] =
	undefined ||
	function () {
		return [d1, d2];
	};
var x270: () => Base[] =
	undefined ||
	function named() {
		return [d1, d2];
	};
var x271: { (): Base[] } =
	undefined ||
	function () {
		return [d1, d2];
	};
var x272: { (): Base[] } =
	undefined ||
	function named() {
		return [d1, d2];
	};
var x273: Base[] = undefined || [d1, d2];
var x274: Array<Base> = undefined || [d1, d2];
var x275: { [n: number]: Base } = undefined || [d1, d2];
var x276: { n: Base[] } = undefined || { n: [d1, d2] };
var x277: () => Base[] =
	function () {
		return [d1, d2];
	} ||
	function () {
		return [d1, d2];
	};
var x278: () => Base[] =
	function named() {
		return [d1, d2];
	} ||
	function named() {
		return [d1, d2];
	};
var x279: { (): Base[] } =
	function () {
		return [d1, d2];
	} ||
	function () {
		return [d1, d2];
	};
var x280: { (): Base[] } =
	function named() {
		return [d1, d2];
	} ||
	function named() {
		return [d1, d2];
	};
var x281: Base[] = [d1, d2] || [d1, d2];
var x282: Array<Base> = [d1, d2] || [d1, d2];
var x283: { [n: number]: Base } = [d1, d2] || [d1, d2];
var x284: { n: Base[] } = { n: [d1, d2] } || { n: [d1, d2] };
var x285: () => Base[] = true ? () => [d1, d2] : () => [d1, d2];
var x286: () => Base[] = true
	? function () {
			return [d1, d2];
		}
	: function () {
			return [d1, d2];
		};
var x287: () => Base[] = true
	? function named() {
			return [d1, d2];
		}
	: function named() {
			return [d1, d2];
		};
var x288: { (): Base[] } = true ? () => [d1, d2] : () => [d1, d2];
var x289: { (): Base[] } = true
	? function () {
			return [d1, d2];
		}
	: function () {
			return [d1, d2];
		};
var x290: { (): Base[] } = true
	? function named() {
			return [d1, d2];
		}
	: function named() {
			return [d1, d2];
		};
var x291: Base[] = true ? [d1, d2] : [d1, d2];
var x292: Array<Base> = true ? [d1, d2] : [d1, d2];
var x293: { [n: number]: Base } = true ? [d1, d2] : [d1, d2];
var x294: { n: Base[] } = true ? { n: [d1, d2] } : { n: [d1, d2] };
var x295: (s: Base[]) => any = true
	? (n) => {
			var n: Base[];
			return null;
		}
	: (n) => {
			var n: Base[];
			return null;
		};
var x296: Genric<Base> = true
	? {
			func: (n) => {
				return [d1, d2];
			},
		}
	: {
			func: (n) => {
				return [d1, d2];
			},
		};
var x297: () => Base[] = true ? undefined : () => [d1, d2];
var x298: () => Base[] = true
	? undefined
	: function () {
			return [d1, d2];
		};
var x299: () => Base[] = true
	? undefined
	: function named() {
			return [d1, d2];
		};
var x300: { (): Base[] } = true ? undefined : () => [d1, d2];
var x301: { (): Base[] } = true
	? undefined
	: function () {
			return [d1, d2];
		};
var x302: { (): Base[] } = true
	? undefined
	: function named() {
			return [d1, d2];
		};
var x303: Base[] = true ? undefined : [d1, d2];
var x304: Array<Base> = true ? undefined : [d1, d2];
var x305: { [n: number]: Base } = true ? undefined : [d1, d2];
var x306: { n: Base[] } = true ? undefined : { n: [d1, d2] };
var x307: (s: Base[]) => any = true
	? undefined
	: (n) => {
			var n: Base[];
			return null;
		};
var x308: Genric<Base> = true
	? undefined
	: {
			func: (n) => {
				return [d1, d2];
			},
		};
var x309: () => Base[] = true ? () => [d1, d2] : undefined;
var x310: () => Base[] = true
	? function () {
			return [d1, d2];
		}
	: undefined;
var x311: () => Base[] = true
	? function named() {
			return [d1, d2];
		}
	: undefined;
var x312: { (): Base[] } = true ? () => [d1, d2] : undefined;
var x313: { (): Base[] } = true
	? function () {
			return [d1, d2];
		}
	: undefined;
var x314: { (): Base[] } = true
	? function named() {
			return [d1, d2];
		}
	: undefined;
var x315: Base[] = true ? [d1, d2] : undefined;
var x316: Array<Base> = true ? [d1, d2] : undefined;
var x317: { [n: number]: Base } = true ? [d1, d2] : undefined;
var x318: { n: Base[] } = true ? { n: [d1, d2] } : undefined;
var x319: (s: Base[]) => any = true
	? (n) => {
			var n: Base[];
			return null;
		}
	: undefined;
var x320: Genric<Base> = true
	? {
			func: (n) => {
				return [d1, d2];
			},
		}
	: undefined;
function x321(n: () => Base[]) {}
x321(() => [d1, d2]);
function x322(n: () => Base[]) {}
x322(function () {
	return [d1, d2];
});
function x323(n: () => Base[]) {}
x323(function named() {
	return [d1, d2];
});
function x324(n: { (): Base[] }) {}
x324(() => [d1, d2]);
function x325(n: { (): Base[] }) {}
x325(function () {
	return [d1, d2];
});
function x326(n: { (): Base[] }) {}
x326(function named() {
	return [d1, d2];
});
function x327(n: Base[]) {}
x327([d1, d2]);
function x328(n: Array<Base>) {}
x328([d1, d2]);
function x329(n: { [n: number]: Base }) {}
x329([d1, d2]);
function x330(n: { n: Base[] }) {}
x330({ n: [d1, d2] });
function x331(n: (s: Base[]) => any) {}
x331((n) => {
	var n: Base[];
	return null;
});
function x332(n: Genric<Base>) {}
x332({
	func: (n) => {
		return [d1, d2];
	},
});
var x333 = (n: () => Base[]) => n;
x333(() => [d1, d2]);
var x334 = (n: () => Base[]) => n;
x334(function () {
	return [d1, d2];
});
var x335 = (n: () => Base[]) => n;
x335(function named() {
	return [d1, d2];
});
var x336 = (n: { (): Base[] }) => n;
x336(() => [d1, d2]);
var x337 = (n: { (): Base[] }) => n;
x337(function () {
	return [d1, d2];
});
var x338 = (n: { (): Base[] }) => n;
x338(function named() {
	return [d1, d2];
});
var x339 = (n: Base[]) => n;
x339([d1, d2]);
var x340 = (n: Array<Base>) => n;
x340([d1, d2]);
var x341 = (n: { [n: number]: Base }) => n;
x341([d1, d2]);
var x342 = (n: { n: Base[] }) => n;
x342({ n: [d1, d2] });
var x343 = (n: (s: Base[]) => any) => n;
x343((n) => {
	var n: Base[];
	return null;
});
var x344 = (n: Genric<Base>) => n;
x344({
	func: (n) => {
		return [d1, d2];
	},
});
var x345 = function (n: () => Base[]) {};
x345(() => [d1, d2]);
var x346 = function (n: () => Base[]) {};
x346(function () {
	return [d1, d2];
});
var x347 = function (n: () => Base[]) {};
x347(function named() {
	return [d1, d2];
});
var x348 = function (n: { (): Base[] }) {};
x348(() => [d1, d2]);
var x349 = function (n: { (): Base[] }) {};
x349(function () {
	return [d1, d2];
});
var x350 = function (n: { (): Base[] }) {};
x350(function named() {
	return [d1, d2];
});
var x351 = function (n: Base[]) {};
x351([d1, d2]);
var x352 = function (n: Array<Base>) {};
x352([d1, d2]);
var x353 = function (n: { [n: number]: Base }) {};
x353([d1, d2]);
var x354 = function (n: { n: Base[] }) {};
x354({ n: [d1, d2] });
var x355 = function (n: (s: Base[]) => any) {};
x355((n) => {
	var n: Base[];
	return null;
});
var x356 = function (n: Genric<Base>) {};
x356({
	func: (n) => {
		return [d1, d2];
	},
});
