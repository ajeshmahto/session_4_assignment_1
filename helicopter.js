"use strict";
exports.__esModule = true;
var Helicopter = (function () {
    function Helicopter() {
    }
    Helicopter.prototype.start = function () {
        console.log("helicopter started");
    };
    Helicopter.prototype.drive = function () {
        console.log("helicopter can driver");
    };
    Helicopter.prototype.getPosition = function () {
        console.log("the position is ");
    };
    Helicopter.prototype.fly = function () {
        console.log("helicopter can fly");
    };
    return Helicopter;
}());
exports.Helicopter = Helicopter;
