class Car {

    constructor() {
        this.spd = 100;
        this.lght = 2;
    }

    speed() {
        console.log(this);
    }
}

let car = new Car();
car.speed();