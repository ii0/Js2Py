// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Refer 13; 
    The production FunctionBody : SourceElementsopt is evaluated as follows:
es5id: 13.0-9-s
description: >
    Strict Mode - SourceElements is evaluated as strict mode code when
    a FunctionDeclaration that is contained in strict mode code has an
    inner function
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";

        var _13_0_9_fun = function () {
            function _13_0_9_inner() { eval("eval = 42;"); }
            _13_0_9_inner();
        };
        try {
            _13_0_9_fun();
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
