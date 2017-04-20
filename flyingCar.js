"use strict";
exports.__esModule = true;
var FlyingCar = (function () {
    function FlyingCar() {
    }
    FlyingCar.prototype.start = function () {
        console.log("flyingcar started");
    };
    FlyingCar.prototype.drive = function () {
        console.log("flyingcar can driver");
    };
    FlyingCar.prototype.getPosition = function () {
        console.log("the position is ");
    };
    FlyingCar.prototype.fly = function () {
        console.log("flyingcar can fly");
    };
    return FlyingCar;
}());
exports.FlyingCar = FlyingCar;
