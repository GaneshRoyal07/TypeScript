//basic types
let Name: string="Ganesh";
let age: number= 22;
let isStudent: boolean=true
console.log(Name,age,isStudent)

//any (can store anything)
let data:any=10;
data="Hello";
data=true
console.log(data)

//unknown
let value: unknown="Ganesh";
if (typeof value==="string")
console.log(value.toUpperCase())

//Array (method1)
let names: string[]=['Ganesh','Sasi','Karthik'];
console.log(names)

//Array (method2)
let numbers: Array<number>=[1,2,3,4,5];
console.log(numbers)

//Tuples (fixed type & length)
let person: [string,number,boolean]=["Ganesh",22,true];
console.log(person)

//object type
let student:{name:string,age:number,city:string}={
    name:"Ganesh",
    age:22,
    city:"Bengaluru"
}
console.log(student)

//null & undefined
let x:null=null;
let y:undefined=undefined;
console.log(x)
console.log(y)

//union type
let id:string|number;
id=101;
id="Gani";
console.log(id);

//function with parameter type
function add(a:number,b:number){
    return a+b;
}
console.log(add(4,3))

//function with return type
function multiply(a:number,b:number):number{
    return a*b;
}
console.log(multiply(5,5))

//function returning string
function greet(name:string):string{
    return "Hello "+name;
}
console.log(greet("Ganesh"))

//function returning boolean
function isEven(num:number):boolean{
    return num%2==0;
}
console.log(isEven(8));

//function with optional parameter
function greetUser(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, Age: ${age}`;
  }
  return `Hello ${name}`;
}
console.log(greetUser("Ganesh"))
console.log(greetUser("Ganesh",22))