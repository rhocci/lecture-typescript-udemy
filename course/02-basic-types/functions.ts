function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  throw new Error(errorMessage);
}

function performJob(cb: (msg: string) => void) {
  cb('Job done!');
}

performJob(log);

type UserInfo = {
  name: string;
  age: number;
  greet: () => string;
};

let user: UserInfo = {
  name: 'Max',
  age: 38,
  greet() {
    return `Hello, ${this.name}!`;
  },
};

console.log(user.greet());
