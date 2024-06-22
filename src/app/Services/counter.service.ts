import { Injectable } from '@angular/core';

// same instace of this services will be available throught the application

// @Injectable({
//   providedIn: 'root',
// })
export class CounterService {
  constructor() {}

  counter: number = 0;

  increment(componetName: string) {
    console.log(componetName + ': ' + this.counter++);
  }
}
//this service isnot used in this application. created only to understand availablity of instance of instance
