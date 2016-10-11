var assert = require('assert');
var clone = require('./');

describe('deepClone()', function () {
    it ('can clone primitives', function () {
        assert.deepEqual(clone.deepClone(5), 5);
        assert.deepEqual(clone.deepClone('test'), 'test');
    });

    it ('can clone arrays', function () {
        var arr = [1, 2, 3, 4, 5];
        var strArr = ['Hello', 'World'];

        assert.deepEqual(clone.deepClone(arr), arr);
        assert.deepEqual(clone.deepClone(strArr), strArr);
    });

    it ('can clone objects', function () {
        var obj = {a: 0, b: 1, c: 2};

        assert.deepEqual(clone.deepClone(obj), obj);
    });

    it ('returns undefined when passed undefined', function () {});
    it ('returns undefined when null is passed', function () {});
    it ('can clone date objects', function () {
        var date = new Date();

        assert.deepEqual(clone.deepClone(date), date);
    });

    it ('can clone arrays of arrays', function () {});
    it ('can clone arrays of objects', function () {});
    it ('can clone arrays filled with nulls and undefined', function () {});
    it ('can clone objects filled with nulls and undefined', function () {});
    it ('can clone objects with a nested arrays as a value', function () {});
    it ('can clone regex', function () {});
    it ('can clone functions', function () {});
    it ('can clone promises', function () {});
    it ('can clone NaN', function () {});
    it ('can detect circular references', function () {});
    it ('can clone symbols', function () {});
});