<template>
    <NuxtLayout name="defaultttt">
    <NuxtPage />
  </NuxtLayout>
    <div id="app">
      <VehicleComponent :make="vehicle.make" :model="vehicle.model" />
      <CarComponent :make="car.make" :model="car.model" :doors="car.doors" />
      <MotorcycleComponent :make="motorcycle.make" :model="motorcycle.model" :wheels="motorcycle.wheels" />
    </div>
  </template>
  
  <script setup>
  import { ref, toRefs } from 'vue';
  import VehicleComponent from '~/components/VehicleComponent.vue';
  import CarComponent from '~/components/CarComponent.vue';
  import MotorcycleComponent from '~/components/MotorcycleComponent.vue';
  
  class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    displayInfo() {
      return `${this.make} ${this.model}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, doors) {
      super(make, model);
      this.doors = doors;
    }
  
   
    displayDoors() {
      return `Number of doors: ${this.doors}`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, wheels) {
      super(make, model);
      this.wheels = wheels;
    }
  
    displayWheels() {
      return `Number of wheels: ${this.wheels}`;
    }
  }
  
  const vehicle = ref(new Vehicle('Generic', 'Vehicle'));
  const car = ref(new Car('Toyota', 'innova', 4));
  const motorcycle = ref(new Motorcycle('Bajaj', 'NS-200', 2));
  
  </script>
  
  <style></style>
  
  