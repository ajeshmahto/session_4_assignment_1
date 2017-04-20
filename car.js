"use strict";
exports.__esModule = true;
var Car = (function () {
    function Car() {
    }
    Car.prototype.consotructor = function () {
    };
    Car.prototype.start = function () {
        console.log("car started");
    };
    Car.prototype.drive = function () {
        console.log("car can driver");
    };
    Car.prototype.getPosition = function () {
        console.log("the position is ");
    };
    return Car;
}());
exports.Car = Car;
