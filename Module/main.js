/*
  Modules
  - Import And Export
*/

//  export let a = 10;
//  export let arr = [1,2,3,4];

//  export function saySomething(){
//     return `Something`;
//  }
// let a = 10;
// let arr = [1,2,3,4];
//   function saySomething(){
//     return `Something`;
//  }
//  export {
//   a  ,arr,saySomething
//  }

 /*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

let a = 10;
let arr = [1,2,3,4];
  function saySomething(){
    return `Something`;
 }
 export {
  a as myNumber ,arr,saySomething
 }

 // default export // tnajem tsamiha aya essem ki t3AYTELHA 

 export default function sayHello(){
  return "Hello";
 }