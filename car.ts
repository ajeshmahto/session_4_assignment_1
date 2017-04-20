import {Drivable} from './Drivable';


export class Car implements Drivable {
    consotructor( ){

    }
    start() {
        console.log("car started");

    }

    drive() {
        console.log("car can driver");
    }

    getPosition() {
        console.log("the position is ")
    }
    
}