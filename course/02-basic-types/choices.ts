// enum Role {
//   Admin, // 0
//   Editor, // 1
//   Guest, // 2
// }

type Role = 'Admin' | 'Editor' | 'Guest' | 'Reader';
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = 'Admin';

// ...

userRole = 'Guest';

let possibleValues: [1 | -1, 1 | -1];

possibleValues = [1, -1];
