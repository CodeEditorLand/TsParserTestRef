//@filename: app.tsx
import * as React from "react";

// @jsx: preserve

//@filename: react.d.ts
declare module "react" {
	class Component<T, U> {}
}

export class Text extends React.Component<{}, {}> {
	_tagName: string = "div";

	render() {
		return <this._tagName> Hello world </this._tagName>;
	}
}
