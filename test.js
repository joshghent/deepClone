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

    it ('can deeply cloning arrays', function () {
        var arr = [[1,2,3,4], [5,6,7,8,9], [10,11,12,13,14]];
        var cloneArr = clone.deepClone(arr);
        cloneArr[0] = ['a', 'b', 'c', 'd'];

        assert.notDeepEqual(cloneArr, arr);
    });

    it ('can clone objects', function () {
        var obj = {a: 0, b: 1, c: 2};

        assert.deepEqual(clone.deepClone(obj), obj);
    });

    it ('can deep clone objects', function () {
        var obj = { a: 1, b: 0};
        var copyObj = clone.deepClone(obj);
        copyObj.b = 10;
        assert.notDeepEqual(copyObj, obj);
    });

    it ('returns undefined when passed undefined', function () {
        assert.deepEqual(clone.deepClone(undefined), undefined);
    });

    it ('returns undefined when null is passed', function () {
        assert.deepEqual(clone.deepClone(null), undefined);
    });

    it ('can clone date objects', function () {
        var date = new Date();

        assert.deepEqual(clone.deepClone(date), date);
    });

    it ('can clone arrays of arrays', function () {
        var arr = [[1,2,3,4], [5,6,7,8,9], [10,11,12,13,14]];

        assert.deepEqual(clone.deepClone(arr), arr);
    });

    it ('can clone arrays of objects', function () {
        var arr = [{
            id: 0,
            name: "Ronald McDonald",
            selection: [0, 1, 2]
        }, {
            id: 1,
            name: "Colonal Sanders",
            selection: [3, 4, 5]
        }];

        assert.deepEqual(clone.deepClone(arr), arr);
    });

    it ('can clone arrays filled with nulls and undefined', function () {
        var arr = [null, undefined, undefined, null];

        assert.deepEqual(clone.deepClone(arr), arr);
    });
    
    it ('can clone objects filled with nulls and undefined', function () {
        var obj = { undefined: 0, null: undefined, "": [undefined, null], 1: null};

        assert.deepEqual(clone.deepClone(obj), obj);
    });
    
    it ('can clone objects with a nested arrays as a value', function () {
        var obj = {
            a: [["things", 1, 2], ["hello", 6, 5, 4], ["world", 4, 31]],
            b: [["test"], ["more testing"]]
        }
        
        assert.deepEqual(clone.deepClone(obj), obj);
    });
    
    it ('can clone regex', function () {
        assert.deepEqual(clone.deepClone(/foo/g), /foo/g);
    });
    
    it ('can clone functions', function () {});
    
    it ('can clone promises', function () {

    });
    
    it ('can detect circular references', function () {
        var a = {};
        var b = {};
        a.b = b;
        b.a = a;

        assert.equal(clone.deepClone(a), a);
    });

    it ('can clone symbols', function () {});
});