// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-173-1
description: >
    Object.defineProperty - 'Attributes' is the JSON object that uses
    Object's [[Get]] method to access the 'writable' property of
    prototype object (8.10.5 step 6.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        try {
            Object.prototype.writable = true;

            Object.defineProperty(obj, "property", JSON);

            var beforeWrite = obj.hasOwnProperty("property");

            obj.property = "isWritable";

            var afterWrite = (obj.property === "isWritable");

            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Object.prototype.writable;
        }
    }
runTestCase(testcase);
