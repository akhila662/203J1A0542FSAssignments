//1.Basic Types:
//Number,String,Boolean,Array of numbers,Tuple with elements of type string and number,Enum for days of the week
let myNumber:number=18;
let myString:string="Virat";
let isTrue:boolean=true;
let numberArray:number[]=[1,8,4,5];
let myTuple:[string,number]=["Virat",18];
enum DaysofWeek{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
let today1:DaysofWeek=DaysofWeek.Monday;
console.log("Number:",myNumber);
console.log("String:",myString);
console.log("Boolean:",isTrue);
console.log("Array:",numberArray);
console.log("Tuple:",myTuple);
console.log("DOW:",DaysofWeek[today1]);

//2.Functions:
//Adding two numbers
function add(n1,n2):number{
    return n1+n2;
}
console.log(add(1,8));

//Capitalize a string
function capitalize(str:string):string{
    return str.charAt(0).toUpperCase()+str.slice(1);
}
console.log(capitalize("Royal Challenges Bangalore"));

//3.Interfaces:
//define the person interface and declare the variable user
interface Person{
    name:string,
    age:number,
    email:string
}
const user:Person={
    name:"Akhila",
    age:42,
    email:"akhiladadi@gmail.com"
}
console.log("User1:",user);

//4.Classes:
//define  the car class
class Car{
    make:string;
    model:string;
    year:number;
constructor(make:string,model:string,year:number){
    this.make=make;
    this.model=model;
    this.year=year;
}
displayInfo(): void {
        console.log(`Car Information:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}`);
    }
}
// Implement a method displayInfo which logs the information about the car.
let myCar=new Car("Camry","Audi",2019);
myCar.displayInfo();

//5.Generics:
//Write a generic function called reverseArray that takes an array of any type
and returns a reversed version of that array in typescript */

function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

// Example usage:
let originalArray: number[] = [1,8,4,5,9,6];
let reversedArray: number[] = reverseArray(originalArray);
console.log("ReverseArray:",reversedArray); 
