﻿// @target: es5

function f() {
    var { arguments } = { arguments: "hello" };
    if (Math.random()) {
        return () => arguments[0];
    }
    var arguments = "world";
}
