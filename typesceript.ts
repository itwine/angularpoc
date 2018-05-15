let fname : string;
let  lname : string;
let email   : string;
let age : number;
const pi : number = 3.15;
let dob : Date;
let active: boolean;
let cname : String = "Sybase Control Center is a Web-based." ;
let employees : string[] = [];
let uniontype: string | number | string[];
let employeelist : Array<string> = new Array<string>();
employees.push("harsha");
employees.push("mari");
employees.push("naveen");
employees.push("ravi");

console.log(employees.length);

for(let employee of employees){
    console.log(employee);
}

employees.forEach(function(employee){
    console.log(employee);
});

class Employee{
 idemp : number;
 name : string;
 salary : number;

 constructor(id : number, fname : string, mname : string, lname : string, salary : number){
    this.idemp = id;
    this.name = fname+" "+mname+" "+lname;
    this.salary = salary;
 }

 add() : number {
     return 1+1;
 }

 sub() : number {
     return 5-2;
 }
}