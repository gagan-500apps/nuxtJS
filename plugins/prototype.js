// Vehicle constructor function
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Adding a method to the Vehicle prototype
  Vehicle.prototype.displayInfo = function () {
    return `${this.make} ${this.model}`;
  };
  
  // Car constructor function that inherits from Vehicle
  function Car(make, model, doors) {
    Vehicle.call(this, make, model); // Call the Vehicle constructor within the Car constructor
    this.doors = doors;
  }
  
  // Inheriting the Vehicle prototype methods
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car; // Set the constructor property back to Car
  
  // Adding a method to the Car prototype
  Car.prototype.displayDoors = function () {
    return `Number of doors: ${this.doors}`;
  };
  
  // Motorcycle constructor function that inherits from Vehicle
  function Motorcycle(make, model, wheels) {
    Vehicle.call(this, make, model);
    this.wheels = wheels;
  }
  
  // Inheriting the Vehicle prototype methods
  Motorcycle.prototype = Object.create(Vehicle.prototype);
  Motorcycle.prototype.constructor = Motorcycle;
  
  // Adding a method to the Motorcycle prototype
  Motorcycle.prototype.displayWheels = function () {
    return `Number of wheels: ${this.wheels}`;
  };
  
  // Creating instances of Car and Motorcycle
  const myCar = new Car('Toyota', 'Camry', 4);
  const myMotorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2);
  
  // Displaying information using prototype methods
  console.log(myCar.displayInfo());         // Output: Toyota Camry
  console.log(myCar.displayDoors());         // Output: Number of doors: 4
  
  console.log(myMotorcycle.displayInfo());   // Output: Harley-Davidson Sportster
  console.log(myMotorcycle.displayWheels()); // Output: Number of wheels: 2
  