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

//default parameter
function User(name:string,age:number=23):string{
    return`Hello ${name}, Age ${age}`;
}
console.log(User("Sasi"))

//arrow function with types
const addNumbers=(a:number,b:number): number => {
    return a+b;
}
console.log(addNumbers(10,20))

//array with union type
let data1: (number | string)[] = [1, "Ganesh", 2, "Ram"];
console.log(data1)

//arrays of objects
let students:{name:string , age:number}[]=[
   {
    name:"Ganesh",
    age:22
    },
   {
    name:"Sasi",
    age:23
    }
]

console.log(students)

//array of methods
let Numbers: number[]=[1,2,3];
Numbers.push(4);
console.log(Numbers);

//forEach
Numbers.forEach((num: number) => {
  console.log(num);
});

//map
let doubled = Numbers.map((num: number): number => {
  return num * 2;
});
console.log(doubled)

//multidimension array
let matrix:number[][]=[
    [1,2],
    [3,4],
    [5,6]
]
console.log(matrix);


//readonly array
let fruits: readonly string[]=["Apple","Orange"];
console.log(fruits);

//tuple special array
let person1:[string, number]=["Ganesh",22];
console.log(person1)

//palindrome program
function isPalindrome(word: string): boolean {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
}

console.log(isPalindrome("mom")); 
console.log(isPalindrome("ganesh")); 

//prime number program
function isPrime(num: number): boolean {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));  
console.log(isPrime(10)); 