//Constructor functions - these build objects.
//"new" - this instantiates (makes and instance of something). this is how we can view it.

//create a new function and when using constructor types the name of the function starts with a capital letter. a constructor function can be used many times.

function Car(make, model, year, honkSound){  //types of input for the car function.
  this.make = make;
  this.model = model;
  this.year = year;
  this.honkSound = honkSound;
//    this.honk = function(){
//      };
};

var jeep = new Car("Jeep", "Cherokee", 1995, "Meerrrpp");
var mazda = new Car("Mazda", "Type 3 - hatchback", 2015, "Blaarrpp");

//jeep.honk();
//mazda.honk();

Car.prototype.honk = function(){
    console.log(this.honkSound);
};

console.log(jeep);   //this only shows in terminal as cars.  to view each part have to console log each item.  if viewed in browser it will show all info.
console.log(mazda);   //this only shows in terminal as cars.  to view each part have to console log each item.  if viewed in browser it will show all info.
