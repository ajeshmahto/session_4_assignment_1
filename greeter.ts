export class Greeter{
    name:string
    constructor(name:string){
        this.name=name;
    }
    greet() {
        return "Hello " +this.name;

    }



    
}

var greeter = new Greeter("ajesh");
console.log(greeter.greet());

