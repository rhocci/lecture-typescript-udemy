class User {
  readonly hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log('My age: ' + this.age);
  }
}

const max = new User('Max', 36);
const fred = new User('Fred', 29);
