class UserName {
  constructor(private firstName: string, private lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const maxName = new UserName('Max', 'Schwarzmuller');
console.log(maxName.fullName);
