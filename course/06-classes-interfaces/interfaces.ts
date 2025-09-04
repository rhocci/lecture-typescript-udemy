interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// type Authenticatable = {
//   role: string;
// }

let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc1',
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
};
