// @filename: 0.tsx
///<reference path="declaration.d.ts" />
import * as cx from "classnames";
import * as React from "react";

// @target: es2017
// @jsx: react
// @moduleResolution: node
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts

// @filename: declaration.d.ts
declare module "classnames";

let buttonProps: { [attributeName: string]: "" };
let k = <button {...buttonProps} className={cx("class1", { class2: true })} />;
