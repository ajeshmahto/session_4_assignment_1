import {Drivable} from './Drivable';
import {Flyable} from './Flyable';

export class FlyingCar implements Drivable,Flyable{

  start() {
        console.log("flyingcar started");

    }

    drive() {
        console.log("flyingcar can driver");
    }

    getPosition() {
        console.log("the position is ")
    }
    fly() {
        console.log("flyingcar can fly");
    }
}