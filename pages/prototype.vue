<template>
 <NuxtLayout name="navbar">
    <NuxtPage />
  </NuxtLayout>
    <div>
      <VehicleComponent :Comp="vehicle.Company" :mod="vehicle.model" />
      <CarComponent :Company="car.Company" :model="car.model" :doors="car.doors" />
      <MotorcycleComponent :Company="motorcycle.Company" :model="motorcycle.model" :wheels="motorcycle.wheels" />
    </div>
  </template>   
  
  <script setup>
  import { ref, toRefs } from 'vue';
  import VehicleComponent from '~/components/VehicleComponent.vue';
  import CarComponent from '~/components/CarComponent.vue';
  import MotorcycleComponent from '~/components/MotorcycleComponent.vue';
  
  class Vehicle {
    constructor(Company, model) {
      this.Company = Company;
      this.model = model;
    }
  
    displayInfo() {
      return `${this.Company} ${this.model}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(Company, model, doors) {
      super(Company, model);
      this.doors = doors;
    }
  
   
    displayDoors() {
      return `Number of doors: ${this.doors}`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(Company, model, wheels) {
      super(Company, model);
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
  
  