//class
class Person{
    name:string;
    age:number;
}

//object
let p1 = new Person();
p1.name="Ganesh";
p1.age=22;
console.log(p1)

//constructor
class Person1{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
let p2= new Person1("Sasi",23);
console.log(p2)

//access modifiers
class Student {
  public name: string;
  private marks: number;

  constructor(name: string, marks: number) {
    this.name = name;
    this.marks = marks;
  }

  getMarks(): number {
    return this.marks;
  }
}

let s1 = new Student("Ganesh", 90);

console.log(s1.name,s1.getMarks());       

//inheritance
class Animal {
  eat(): void {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Barking...");
  }
}

let d1 = new Dog();
d1.eat();
d1.bark();

//polymorphism
class shape{
  draw(): void {
    console.log("Drawing shape");
  }
}
class circle extends shape{
  draw(): void {
    console.log("Drawing circle");
  }
}

let s:shape= new circle();
let s2:circle= new shape();
s.draw();
s2.draw();

//encapsulation
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

let acc = new BankAccount(1000);
acc.deposit(500);
console.log(acc.getBalance());

//abstraction
abstract class Vehicle {
  abstract start(): void;

  stop(): void {
    console.log("Vehicle stopped");
  }
}

class Car extends Vehicle {
  start(): void {
    console.log("Car started");
  }
}

let c = new Car();
c.start();
c.stop();