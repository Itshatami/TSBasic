// types
let pName: string = "alireza";
let phone: number = 9398482612;
let isActive: boolean = true;
let i: any = 44;

let mix: any[] = ["hello", true, 22];
let ids: number[] = [23, 43, 54];

// tuple
let info: [number, string, boolean] = [1, "doctor", true];
let relation: [number, string] = [1, "many to many"];
// tuple array
let cars: [number, string][];
cars = [
  [1, "bmw"],
  [2, "benz"],
];
// onion
let id: number | string = "twoenty-nine";
// Objects
type User = {
  id: number;
  pName: string;
};
let user: User = {
  id: 1,
  pName: "alireza",
};
// functions
function sum(x: number, y: number): number {
  return x + y;
}
// void
function logger(message: string | boolean): void {
  console.log(message);
}

// interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  // in ts if we want something optional use ? .
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "alireza",
};

interface MathFunc {
  (x: number, y: number): number;
}
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register(): string {
    return `${this.name} registered!`;
  }
}
const p1 = new Person(2, "danial");
console.log(p1.register);
