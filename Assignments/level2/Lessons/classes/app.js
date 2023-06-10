//constructor function

// function Car(make, model){
//     this.make = make;
//     this.model = model;
// };

// Car.prototype.honk = function(){
//     console.log('hoonnkk!');
// };

// const jeep = new Car('jeep', 'cherokee');
// const mazda = new Car('mazda', '');

// mazda.honk;

class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.honkSound = this.honkSound;
    };
    honk(){
        console.log('hoonnkk!')
    };

    drive(){
        console.log('vrrrooommm!');
    };
};

class Motorcycle extends Vehicle{       //inherits data from Vehicle constructor.
    constructor(make, model, honkSound, hasSideCar){
        super(make, model, honkSound);             //looks at the superclass of Vehicle.
        this.hasSideCar = hasSideCar;   //this adds the hasSideCar object to the data.
    }
}

const jeep = new Vehicle('jeep', 'Cherokee', 'Veerp');
const harley = new Motorcycle('Harley', 'davidson', true);

harley.honk;