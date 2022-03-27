// public, private, protected, static

class Car {
  static WHEELS = 4;

  name = "car"; // public as default access keyword
  public color: string; // public
  readonly kind = "vehicle";

  #plateNumber = 1234; // private with "#"
  private serialNumber = "a123-b234"; // private

  protected brand: string; // protected

  constructor({
    name = "no-name",
    color = "no-car",
    plateNumber = NaN,
    serialNumber = "no-serial-number",
    brand = "no-brand",
  }) {
    this.name = name;
    this.color = color;
    this.#plateNumber = plateNumber;
    this.serialNumber = serialNumber;
    this.brand = brand;
  }

  protected get plateNumber() {
    return this.#plateNumber;
  }

  start() {
    console.log("start");
    console.log(this.name);
    console.log(this.color);
    console.log(this.#plateNumber);
    console.log(this.serialNumber);
    console.log(Car.WHEELS);
  }
}

class Bmw extends Car {
  constructor(param: CarInfo) {
    super(param);
  }
  showName() {
    console.log(this.name);
  }
  showBrand() {
    console.log(this.brand);
  }
  showKind() {
    console.log(this.kind);
  }
}

type CarInfo = {
  name: string;
  color?: string;
  plateNumber?: number;
  serialNumber?: string;
  brand?: string;
};

// const bmw = new Car("red");
const car = new Car({ name: "my car", brand: "hyundai" });
console.log(car);

const bmwCar = new Bmw({ name: "bmw car", plateNumber: 1357, brand: "toyota" });
console.log(bmwCar);

type HumanInfo = {
  name: string;
  idNumber: string;
  weight?: number;
  height?: number;
};

abstract class _Human {
  public name: string;
  public weight: number;
  public height: number;

  #_idNumber: string;

  constructor(info: HumanInfo) {
    this.name = info.name;
    this.#_idNumber = info.idNumber;
    this.weight = info.weight ? info.weight : NaN;
    this.height = info.height ? info.height : NaN;
  }

  abstract run(): void;
  get idNumber() {
    return this.#_idNumber;
  }
}

class Student extends _Human {
  constructor(info: HumanInfo) {
    super(info);
  }
  run() {
    console.log(this.name + " is running!");
  }
}

let jaehun = new Student({
  name: "jaehun",
  idNumber: "15011019",
  weight: 70,
  height: 169,
});
