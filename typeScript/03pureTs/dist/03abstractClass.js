"use strict";
class takePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class instaCam2 extends takePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const janak2 = new instaCam2('test', 'test', 43);
janak2.getReelTime();
// you cant directly use abstract class, but you can access the class whcih one that
// inheriting the abstract class
