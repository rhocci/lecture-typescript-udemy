"use strict";
class UserName {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    static eid = 'USER';
    static greet() {
        console.log('Hello!');
    }
}
const maxName = new UserName();
maxName.firstName = 'Max';
maxName.firstName = 'Schwarzmuller';
console.log(maxName.fullName);
