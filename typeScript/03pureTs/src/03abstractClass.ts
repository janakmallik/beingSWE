abstract class takePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  // an abstract method like the abstract class inside this, this must be applied
  // inside where ever the class is called
  abstract getSepia(): void

  getReelTime(): number {
    //some complex calculation
    return 8
  }
}

class instaCam2 extends takePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter)
  }

  getSepia(): void {
    console.log('Sepia')
  }
}

const janak2 = new instaCam2('test', 'test', 43)

janak2.getReelTime()

// you cant directly use abstract class, but you can access the class whcih one that
// inheriting the abstract class
