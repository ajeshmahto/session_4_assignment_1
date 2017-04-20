import {Drivable} from './Drivable';
import {Flyable} from './Flyable';

export class Helicopter implements Drivable,Flyable{

  start() {
        console.log("helicopter started");

    }

    drive() {
        console.log("helicopter can driver");
    }

    getPosition() {
        console.log("the position is ")
    }
    fly() {
        console.log("helicopter can fly");
    }
}