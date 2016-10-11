'use strict';

const Clone = function () {}

function getDataType (data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

Clone.prototype.deepClone = function (data) {
    // If the data is null or undefined then we return undefined
    if (data === null || data === undefined) {
        return undefined;
    }

    const dataType = getDataType(data);

    if (dataType === "Date") {
        let clonedDate = new Date();
        clonedDate.setTime(data.getTime());
    }

    if (dataType === "Object") {
        let copiedObject = {};

        for (let key in data) {
            copiedObject[key] = this.deepClone(data[key]);
        }
    }

    if (dataType === "Array") {
        let copiedArray = [];

        for (var i = 0; i < data.length; i++) {
            copiedArray.push(this.deepClone(data[i]));
        }

        return copiedArray;
    }

    else { 
        return data;
    }
}

module.exports = new Clone();