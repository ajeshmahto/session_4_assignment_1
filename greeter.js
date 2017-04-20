"use strict";
exports.__esModule = true;
var Greeter = (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.name;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
var greeter = new Greeter("ajesh");
console.log(greeter.greet());
