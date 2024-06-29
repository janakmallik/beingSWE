interface takePhoto {
  cameraMode: string
  filter: string
  brust: number
}

interface storyMode {
  createStory(): void
}

class instaCam implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {}
}

// to add another interface
// what this does is make sure that you must include the included stuffs in the interface
class YtubeCam implements takePhoto, storyMode {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number,
    public short: string
  ) {}

  createStory(): void {
    console.log('story is created')
  }
}

// interface
// makes things compolsury to add in extends..ers
// you can add more, less isnt allowed

// define a contract for objects. It specifies the properties and methods that an
// object must implement if it implements that interface. Interfaces are purely a
// compile-time construct and are used for type-checking and ensuring that objects have
// specific shapes (properties and methods).
