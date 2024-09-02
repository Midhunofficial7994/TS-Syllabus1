// Interface

// interface Details {
//     name: string;
//     age: number;
//     salary : number;
//     getName : () => void;
// }

// let userDetails :Details ={
//     name: "Midhun",
//     age:21,
//     salary:30000,
//     getName() {
//         console.log(this.name);

//     },
// }

// Type

// type Details = {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// };

// let userDetails :Details ={
//         name: "Midhun",
//         age:21,
//         salary:30000,
//         getName() {
//             console.log(this.name);
    
//         },
//     }


    // Union/ Optional 

    // type Details = {
    //     name: string;
    //     age: number;
    //     salary: number | string;
    //     getName: () => void;
    //   };


//    let skills = (string | number | boolean )[]= ["JS","CSS", "TS", 10,20,30,false]
    
// Functions


// type Details = {
//     name: string;
//     age: number;
//     salary: number;
//     getName?: () => void;
//   };


// let userDetails :Details ={
//         name: "Midhun",
//         age:21,
//         salary:30000,
       
//     }


//     function getName(userDetails:Details){


//         return userDetails.name;

//     }
//     getName(userDetails);


// Named Types 


// type Point = {
//     x: number;
//     y: number;
//   };
  
//   const point: Point = { x: 10, y: 20 };
  
// Rest Parameteres

// function sum(...numbers: number[]): number {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
  

// Fnctional Expression 

// let multiply: (x: number, y: number) => number = function (x, y) {
//     return x * y;
//   };


// Arrays

// let numbers: number[] = [1, 2, 3, 4];
// let names: Array<string> = ["Alice", "Bob", "Charlie"];

//   Type Annotations



// let name: string = "Alice";
// let age: number = 30;

// function greet(person: string): string {
//   return `Hello, ${person}`;
// }

