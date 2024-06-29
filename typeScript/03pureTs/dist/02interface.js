"use strict";
class instaCam {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
}
// to add another interface
// what this does is make sure that you must include the included stuffs in the interface
class YtubeCam {
    constructor(cameraMode, filter, brust, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.short = short;
    }
    createStory() {
        console.log('story is created');
    }
}
// interface
// makes things compolsury to add in extends..ers
// you can add more, less isnt allowed
// define a contract for objects. It specifies the properties and methods that an
// object must implement if it implements that interface. Interfaces are purely a
// compile-time construct and are used for type-checking and ensuring that objects have
// specific shapes (properties and methods).
