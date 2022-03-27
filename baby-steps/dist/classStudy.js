"use strict";
// public, private, protected, static
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Car_plateNumber, __Human__idNumber;
class Car {
    constructor({ name = "no-name", color = "no-car", plateNumber = NaN, serialNumber = "no-serial-number", brand = "no-brand", }) {
        this.name = "car"; // public as default access keyword
        this.kind = "vehicle";
        _Car_plateNumber.set(this, 1234); // private with "#"
        this.serialNumber = "a123-b234"; // private
        this.name = name;
        this.color = color;
        __classPrivateFieldSet(this, _Car_plateNumber, plateNumber, "f");
        this.serialNumber = serialNumber;
        this.brand = brand;
    }
    get plateNumber() {
        return __classPrivateFieldGet(this, _Car_plateNumber, "f");
    }
    start() {
        console.log("start");
        console.log(this.name);
        console.log(this.color);
        console.log(__classPrivateFieldGet(this, _Car_plateNumber, "f"));
        console.log(this.serialNumber);
        console.log(Car.WHEELS);
    }
}
_Car_plateNumber = new WeakMap();
Car.WHEELS = 4;
class Bmw extends Car {
    constructor(param) {
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
// const bmw = new Car("red");
const car = new Car({ name: "my car", brand: "hyundai" });
console.log(car);
const bmwCar = new Bmw({ name: "bmw car", plateNumber: 1357, brand: "toyota" });
console.log(bmwCar);
class _Human {
    constructor(info) {
        __Human__idNumber.set(this, void 0);
        this.name = info.name;
        __classPrivateFieldSet(this, __Human__idNumber, info.idNumber, "f");
        this.weight = info.weight ? info.weight : NaN;
        this.height = info.height ? info.height : NaN;
    }
    get idNumber() {
        return __classPrivateFieldGet(this, __Human__idNumber, "f");
    }
}
__Human__idNumber = new WeakMap();
class Student extends _Human {
    constructor(info) {
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
