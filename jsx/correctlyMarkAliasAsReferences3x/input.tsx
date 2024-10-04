// @filename: 0.tsx
///<reference path="declaration.d.ts" />
import * as cx from "classnames";
import * as React from "react";

// @target: es2017
// @jsx: react
// @moduleResolution: node
// @noImplicitAny: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts

// @filename: declaration.d.ts
declare module "classnames";

let buttonProps;
let k = (
	<button {...buttonProps}>
		<span className={cx("class1", { class2: true })} />
	</button>
);
