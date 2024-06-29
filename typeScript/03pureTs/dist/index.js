"use strict";
// class siteUser {
//   email: string
//   name: string
//   // private makes it inaccassable to anywhre outside this
//   private readonly city: string = 'jhalakathi'
//   constructor(email: string, name: string) {
//     this.email = email
//     this.name = name
//     // this.city = city
//   }
// }
class siteUser {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private makes it inaccassable to anywhre outside this
        this._courseCount = 1;
        // like private except this is accessable by inheritance
        this._courseCountV2 = 1;
        this.city = 'jhalakathi';
        // this.city = city
    }
    // private method; only accessable within the class
    deleteToken() {
        console.log('token deleted');
    }
    get getAppleEmail() {
        return `apple.${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // in typescript we cannt setup any type like void, numbers or etc...
    // thats mean there should be nothing as return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
// Inheritance
// a mechanism to create a new class that extends the functionality
// of an existing parent class by adding or modifying methods and properties.
// every thing expect the private
class subSiteUser extends siteUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCountV2 = 5;
    }
}
const janak = new siteUser('janak@mallik.com', 'janak', 'janak43');
// janak.city = 'dhaka'
