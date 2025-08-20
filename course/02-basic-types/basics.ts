let userName: string;
let userAge = 25;

// ...

userName = 'Moon';
// userAge = '25';

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('10', '4');
