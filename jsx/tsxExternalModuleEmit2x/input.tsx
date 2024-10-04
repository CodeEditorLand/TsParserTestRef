//@filename: app.tsx
import Main from "mod";

//@jsx: react
//@module: commonjs

//@filename: modules.d.ts
declare module "mod" {
	var y: any;
	export default y;
}

declare var Foo, React;
// Should see mod_1['default'] in emit here
<Foo handler={Main}></Foo>;
// Should see mod_1['default'] in emit here
<Foo {...Main}></Foo>;
