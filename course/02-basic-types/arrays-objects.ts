let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Max'];
users = [1, 2];
users = ['John', 'Max'];

let possibleResults: [number, string];

possibleResults = [1, '하나'];
// possibleResults = [6, 10, 12];

let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'Admin',
    id: 1,
  },
};

let val: {} = 'is a value';

let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: 'some string',
};
