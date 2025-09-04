"use strict";
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('My age: ' + this.age);
    }
}
const max = new User('Max', 36);
const fred = new User('Fred', 29);
